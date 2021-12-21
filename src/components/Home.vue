<template>
<div class="contain">
    <div class="heade">
        <h2>Welcome Adejuwon Oshadipe</h2>
         <router-link to="/"><button>Logout</button></router-link>     
    </div>
    <div class="split">
        <div>
            <h3>Log New Task</h3>
            <form  ref="form" class="frm" @submit.prevent="task">
                <select name="" id="selectedTask" v-model="selectedTask">
                    <option value="betxchange">Betxchange</option>
                    <option value="general">General</option>
                    <option value="goldenchancebet">GoldenChanceBet</option>
                    <option value="lottoonline">LottoOnline</option>
                    <option value="pools">Pools</option>
                    <option value="rss">Rss</option>
                    <option value="ussd">Ussd</option>
                    <option value="wgbbet">WgbBet</option>
                </select>
                <div>
                    <label for="products">Products</label>
                    <input type="text" name="products" v-model="products">
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
                    <input type="text" name="event" v-model="event">
                </div>
                <label for="comments"></label>
                <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments" v-model="comments"></textarea>
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
                <p>{{this.station}}</p>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
import db from '../services/firebase';
import {collection, addDoc} from "firebase/firestore";
export default {
    name: 'Home',
    props: ['station', 'uid'],
    data(){
        return{
            selectedTask : null,
            products : null,
            agent : null,
            shopTerminal : null,
            event : null,
            comments : null, 
            status : null
        }
    }, 
    methods:{
       task(){
         try{
             const docRef = addDoc(collection(db, "tasks"), {
                user: this.uid,
                station: this.station,
                selectedTask : this.selectedTask,
                products: this.products,
                agent: this.agent,
                shopTerminal : this.shopTerminal,
                event: this.event,
                comments : this.comments,
                status: this.status,
                time:  new Date()
            }).then(this.$refs.form.reset());
            }catch(e){
                console.log(`Error adding document: `, e);
            }
         }   
       }

    
}
</script>
<style lang="scss" >

</style>