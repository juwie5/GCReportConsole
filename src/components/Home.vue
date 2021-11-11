<template>
<div class="contain">
    <div class="heade">
        <h2>Welcome Adejuwon Oshadipe</h2>
         <router-link to="/"><button>Logout</button></router-link>     
    </div>
    <div class="split">
        <div>
            <h3>Log New Task</h3>
            <form class="frm">
                <select name="" id="">
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
                    <label for="products">Products: </label>
                    <input type="text" name="products">
                </div>
                <div>
                     <label for="agent">Agent: </label>
                     <input type="number" name="agent">
                </div>
                <div>
                    <label for="shop">Shop/Terminal: </label>
                    <input type="text" name="shop">
                </div>
                <div>
                    <label for="event">Event: </label>
                    <input type="text" name="event">
                </div>
                <label for="comments"></label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Comments"></textarea>
                <div class="btm">
                    <label for="">Status</label>
                    <select name="" id="">
                        <option value="pending">Pending</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
                <input type="button" value="Submit">
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
                    <tr>
                        <th>Betxchange</th>
                        <th>Agency Creation</th>
                        <th>25-10-2021 09:32AM</th>
                    </tr>
                </table>
                <button>Load</button>
            </div>
            <div class="tasks">
                <h4>Completed Tasks</h4>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Event</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <th>Betxchange</th>
                        <th>Agency Creation</th>
                        <th>25-10-2021 09:32AM</th>
                    </tr>
                </table>
                <button>Load</button>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
export default {
    
}
</script>
<style lang="scss" >

</style>