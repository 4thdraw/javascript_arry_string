// 매개인자 링크
let dbnavi = {     
    topad : {
        adtitle : "모든 회원에게 7월의 다가오는 혜택",
        adlink : "http://www.11st.co.kr"
    },
    navi : [
        {
            nm : ['회사소개','company.html'],
            cls : 'navi com'
        },
        {
            nm : ['제품소개','show.html'],
            cls : 'navi pro'
        },
        {
            nm : ['고객센터','center.html'],
            cls : 'navi contact'
        }
    ]
}
const topAd =(dbnm) =>{
    console.log(`<a href='${dbnm.topad.adlink}'>${dbnm.topad.adtitle}</a>`)
}
const menuUI = (dbnm) =>{    
    for(i in dbnm.navi){
       console.log(`
                    <a href='${dbnm.navi[i].nm[1]}' class='${dbnm.navi[i].cls}'>
                    ${dbnm.navi[i].nm[0]}
                    </a>
       `)
    }
}
menuUI(dbnavi)
topAd(dbnavi)