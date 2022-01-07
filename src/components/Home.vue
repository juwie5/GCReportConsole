<template>
<div class="contain">
    <div class="heade">
        <h2>Welcome {{currentUser.fname}} {{currentUser.lname}}</h2>
        <router-link to="/"><button @click="clearLocalStorage">Logout</button></router-link>     
    </div>
    <div class="split">
        <div>
            <h3>Log New Task</h3>
            <form  ref="form" class="frm" @submit.prevent="task">
                <select v-model="selectedTask" @change="selectTask" required>
                    <option v-for="(task,index) in tasks" :value="index" :key="index">{{ task.label }}</option>
                </select>
                <div>
                    <label for="products">Products</label>
                    <input type="text" name="products" v-model="products" required>
                </div>
                <div>
                     <label for="agent">Agent </label>
                     <input type="number" name="agent" v-model="agent">
                </div>
                <div>
                    <label for="shop">Shop/Terminal </label>
                    <input type="text" name="shop" v-model="shopTerminal">
                </div>
                <div>
                    <label for="event">Event</label>
                    <select v-model="selectedOption" v-if="selectedTask != -1">
                        <option v-for="option in tasks[selectedTask].options" :key="option">{{ option }}</option>
                    </select>
                </div>
                <label for="comments"></label>
                <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments" v-model="comments" required></textarea>
                <div class="btm">
                    <label for="status">Status</label>
                    <select name="" id="tatus" v-model="status">
                        <option value="pending">Pending</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit">
                    <input type="reset">
                </div>
            </form>
        </div>
        <div>
            <div class="tasks">
                <h4>Task History</h4>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Event</th>
                        <th>Time</th>
                    </tr>
                    <tr class="tablecontent">
                        <th>Betxchange</th>
                        <th>Agency Creation</th>
                        <th>25-10-2021 09:32AM</th>
                    </tr>
                     <tr class="tablecontent">
                        <th>Betxchange</th>
                        <th>Agency Creation</th>
                        <th>25-10-2021 09:32AM</th>
                    </tr>
                </table>
                <button class="taskbtn">Load</button>
            </div>
            <div class="tasks">
                <h4>Completed Tasks</h4>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Event</th>
                        <th>Time</th>
                    </tr>
                    <tr class="tablecontent">
                        <th>Betxchange</th>
                        <th>Agency Creation</th>
                        <th>25-10-2021 09:32AM</th>
                    </tr>
                    <tr class="tablecontent">
                        <th>Betxchange</th>
                        <th>Agency Creation</th>
                        <th>25-10-2021 09:32AM</th>
                    </tr>
                </table>
                <button class="taskbtn">Load</button>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
import db from '../services/firebase';
import {collection, addDoc, getDocs} from "firebase/firestore";
export default {
    name: 'Home',
    data(){
        return{
            selectedTask : null,
            products : null,
            agent : null,
            shopTerminal : null,
            event : null,
            comments : null, 
            status : null,
            currentUser: {},
            tasks:[
                {
                label: "Betxchange",
                options:["AGENCY UPDATE","BIS","BIS DATA TRANS","CASHOUT ISSUE","GAMES DOWNLOAD","INVALID TICKET","PAYOUT ISSUE","POS ALLOCATION","POS LOADING","RESULT ENTRY","SALES DIFF","SALES REPORT","SLB TRANSFER","TERM IMPORT DB","TICKET QUERY","UID","WALLET CREATION","WALLET ISSUE"]
                },
                {
                 label:"Betxperience",
                 options:["UNDECIDED TICKET", "NO INTERNET ERROR","VIRTUAL","SPORTBET","SYSTEM CONFIGURATION","ACCOUNT BLOCKED","AGENCY CREATION","ODDS","Development"]
                },
                {
                    label:"General",
                    options:["AGENT CALLS", "EMAILS","GAMES VERICATION","GET CODE","INTERNET CONNECT","ODDS CHECK","POS TESTING","SERVER MTCE","SERVER SETUP","STAFF PROFILING","SYS CONFIG"]
                },
                {
                    label:"Goldenchancebet",
                    options:["ACCOUNT BLOCKED","AGENCY CREATION","ELBET SHP ACT","LIVE EVENT","ODDS","TICKET UPDATE"]
                }, 
                {
                    label:"Lotto Online",
                    options:["ACCOUNT UPDATE","CPAY DISPUTE","CREDITING","JACKPOT REPORT","LOTTOHUB BIS","MONIFY DISPUTE","PAYOUT ISSUE","PAYSTK DISPUTE","REF APPROVAL", "RESULT ENTRY"]
                },
                {
                    label:"Pools",
                    options:["AGENT CREATION","BIS","SALES DIFF","SERVER CON ERR","TICKET DELETION"]
                },
                {
                    label:"Rss",
                    options:["AGENCY CREATION","AGENCY UPDATE","BIS","CASHIER ADD","DEVICE ACTIVATION","LOGIN ISSUE","MULTI TICKETS","PASSWORD RESET","RSS REPORT","SALES DIFF","TERM ALLOCATE","TERM IMPORT DB","UID"]
                },
                {
                    label:"Ussd",
                    options:["MANUAL PAYOUT", "SERVICE TIMEOUT"]
                }
            ],
            selectedTask: -1,
            selectedOption: ''
        }
    }, 
    methods:{
        //Send each task to firebase db
       task(){
         try{
             const docRef = addDoc(collection(db, "tasks"), {
                user: localStorage.getItem('uid'),
                station: localStorage.getItem('station'),
                products: this.products,
                agent: this.agent,
                shopTerminal : this.shopTerminal,
                event: this.selectedOption,
                comments : this.comments,
                status: this.status,
                time:  new Date()
            }).then(this.$refs.form.reset());
                console.log(this.event)
            }catch(e){
                console.log(`Error adding document: `, e);
            }
         }, 
         // clear data stored on local storage
            clearLocalStorage(){
                localStorage.clear()
            },
            // used to add task so two options can have related data
            selectTask(){
                this.selectedOption = ''; 
            }
       },
       // user data is added to page on created lifecycle 
       created(){
            const colRef = collection(db, "users")
            getDocs(colRef).then((snapshot) =>{
                let user = []
                snapshot.docs.forEach((doc) => {
                    user.push({...doc.data(), id: doc.id})
                })
                this.currentUser = user.find(element => element.id == localStorage.getItem('uid'))
            })
       }        
}
</script>
<style lang="scss" >

</style>