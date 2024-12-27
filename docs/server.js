const express = require('express');
const Brawlstats = require('brawlstats');
const app = express();
const port = 3000;

const client = new Brawlstats('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY3NjkwZmY5LTRmMDgtNGMyOS1iODdmLTBmNzhlY2EyMzg1ZCIsImlhdCI6MTczMzU2NDQ5OSwic3ViIjoiZGV2ZWxvcGVyLzkxOTJhMTM4LTAzZmQtNWFkNy1iNjFkLWNkNzU1NGE0NmIyMyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNS41My4xMTMuMjAxIl0sInR5cGUiOiJjbGllbnQifV19.tkrpGkqeo5YNpIJNFaqqRnhk1YqeC1DCi-YJivqzcZIjIht1dQtlvbhFiIlq_g-7LeLU0fddjHP7WNqusLA5QQ');

app.get('/player/:id', (req, res) => {
    const playerId = req.params.id;
    client.getPlayer(playerId)
        .then(player => {
            res.json({
                name: player.name,
                trophies: player.trophies
            });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

