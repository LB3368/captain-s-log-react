const React = require('react')
const DefaultLayout = require('./layouts/Default')


//Creating a New View

class New extends React.Component {
    render() {
        return(
            <DefaultLayout title="Create New Log">
                <a href="/logs/">View All Logs</a><br /><br />
                
                <form action="/logs" method="POST">

                    <table>
                        <tr>
                            <td>Title: </td>
                            <td><input type="text" name="title" /></td>
                        </tr>
                        <tr>
                            <td>Entry: </td>
                            <td><textarea name="entry" rows="4" cols="50"></textarea></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="shipIsBroken" >Ship needs repairs?</label></td>
                            <td><input type="checkbox" name="shipIsBroken" id="shipIsBroken"/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Send Log" /></td>
                        </tr>
                    </table>
                    
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;





//Create the New view, it should contain a form with the following:
// form with action="/logs" and method="POST"
// input type text for a title
// input type textarea for an entry
// input type checkbox for shipIsBroken
// input type submit