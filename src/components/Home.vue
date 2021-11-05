<template>
<div class="contain">
    <div class="heade">
        <h2>Welcome Adejuwon Oshadipe</h2>
        <button>Logout</button>
    </div>
    <div class="split">
        <div>
            <h3>Log New Task</h3>
            <form class="frm">
                <select name="" id="">
                    <option value="betxchange">Betxchange</option>
                    <option value="betxchange">Betxchange</option>
                    <option value="betxchange">Betxchange</option>
                    <option value="betxchange">Betxchange</option>
                </select>
                <label for="products">Products</label>
                <input type="text" name="products">
                <label for="agent">Agent</label>
                <input type="text" name="agent">
                <label for="shop">Shop/Terminal</label>
                <input type="text" name="shop">
                <label for="event">Event</label>
                <input type="text" name="event">
                <label for="comments"></label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Comments"></textarea>
                <div>
                    <select name="" id="">
                        <option value="pending">Pending</option>
                        <option value="resolved">Resolved</option>
                    </select>
                    <input type="button" value="Submit">
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