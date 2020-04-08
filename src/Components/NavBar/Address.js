import React, { Component } from 'react'
import "./Address.css"
import PP from "../../Assets/Images/PP.png"

class MidBar extends Component {
  render() {
    return (
      <div className="address">
        <div className="about-me" >
          <img alt="pp" className="pp" src={PP} width="150" />
          <h1>Ben kimim?</h1>
          Full stack developer olmak isteyen, bu konuyu yeni öğrenmeye başlayan bir wannabe
          Adım Musa Kutlay Tunç, 2019 yılında odyoloji bölümünü bitirip işsiz kaldım. KPSS kasarken bir arkadaşım
          elimden tuttu ve bu sayfayı yaptım. Hala ne yapacağımı bilmiyorum, ama herkes de böyle değil mi zaten?
        </div>
      </div>
    )
  }
}

export default MidBar
