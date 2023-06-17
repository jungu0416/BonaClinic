const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 8899);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html')
})


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
