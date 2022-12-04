const React = require('react')
const DefaultLayout = require("./layouts/Default")


//Getting the Index View

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return(
            <DefaultLayout title="All Logs">
                <a href="/logs/new">Create New Log</a>

                <ul>
                    {
                        logs.map((log, i) => {
                            let date = new Date(log.createdAt).toLocaleString();

                            return(
                                <li key = {i}>
                                    <a href={`/logs/${log._id}`}>{log.title}</a><br />
                                    <span>{date}</span>
                                    
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <a href={`/logs/${log._id}/edit`}><button type="button">Edit Log</button></a>
                                        <input type="submit" value="Delete Log" />
                                    </form><br />
                                </li>
                            )
                        })
                    }
                </ul>
                <footer> Created By L. Bridges | Per Scholas Fellow 2022 </footer>
            </DefaultLayout>
        )
    }
}

module.exports = Index;