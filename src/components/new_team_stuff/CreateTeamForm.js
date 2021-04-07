import React, {useState, useEffect} from "react"
import PlayerHighlight from "./PlayerHighlight"

const CreateTeamForm = ({sendToHome, user, flipState}) => {
    const [qbDisplay, setQbDisplay] = useState(null);
    const [rbDisplay, setRbDisplay] = useState(null);
    const [wrDisplay, setWrDisplay] = useState(null);
    const [ltDisplay, setLtDisplay] = useState(null);
    const [rtDisplay, setRtDisplay] = useState(null);
    const [lgDisplay, setLgDisplay] = useState(null);
    const [rgDisplay, setRgDisplay] = useState(null);
    const [cDisplay, setCDisplay] = useState(null);
    const [teDisplay, setTeDisplay] = useState(null);
    const [allQbs, setAllQbs] = useState ([]);
    const [allRbs, setAllRbs] = useState ([]);
    const [allWrs, setAllWrs] = useState([]);
    const [allLts, setAllLts] = useState([]);
    const [allRts, setAllRts] = useState([]);
    const [allRgs, setAllRgs] = useState([]);
    const [allLgs, setAllLgs] = useState([]);
    const [allCs, setAllCs] = useState([]);
    const [allTes, setAllTes] = useState([]);
    const [formData, setFormData] = useState({
        teamName: "",
        user: user.id,
        quarterback: "",
        runningback: "",
        wideout: "",
        lefttackle: "",
        righttackle: "",
        leftguard: "",
        center: "",
        rightguard: "",
        tightend: ""
    });
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [salarycap, setSalaryCap] = useState("120,000,000");
    const [lastQbPrice, setLastQbPrice] = useState(0);
    const [lastRbPrice, setLastRbPrice] = useState(0);
    useEffect(() => {
        fetch("http://localhost:3000/all_qbs")
            .then(r=> r.json())
            .then(d => {
                const tempQb = d.map((qb) => <option key={qb.name} value={qb.name}>{qb.name}</option>);
                setQbDisplay(tempQb);
                setAllQbs(d);
            })
        fetch("http://localhost:3000/all_rbs")
            .then(r=>r.json())
            .then(d=> {
                const tempRb = d.map((rb) => <option key={rb.name} value={rb.name}>{rb.name}</option>);
                setRbDisplay(tempRb);
                setAllRbs(d);
            })
        fetch("http://localhost:3000/all_wrs")
            .then(r=>r.json())
            .then(d=> {
                const tempWr = d.map((wr) => <option key={wr.name} value={wr.name}>{wr.name}</option>);
                setWrDisplay(tempWr);
                setAllWrs(d);
            })
        fetch("http://localhost:3000/all_lts")
            .then(r=>r.json())
            .then(d=> {
                const tempLt = d.map((lt) => <option key={lt.name} value={lt.name}>{lt.name}</option>);
                setLtDisplay(tempLt);
                setAllLts(d);
            })
        fetch("http://localhost:3000/all_rts")
            .then(r=>r.json())
            .then(d=> {
                const tempRt = d.map((rt) => <option key={rt.name} value={rt.name}>{rt.name}</option>);
                setRtDisplay(tempRt);
                setAllRts(d);
        })
        fetch("http://localhost:3000/all_cs")
            .then(r=>r.json())
            .then(d=> {
                const tempC = d.map((c) => <option key={c.name} value={c.name}>{c.name}</option>);
                setCDisplay(tempC);
                setAllCs(d);
        })
        fetch("http://localhost:3000/all_lgs")
            .then(r=>r.json())
            .then(d=> {
                const tempLg = d.map((lg) => <option key={lg.name} value={lg.name}>{lg.name}</option>);
                setLgDisplay(tempLg);
                setAllLgs(d);
        })
        fetch("http://localhost:3000/all_rgs")
            .then(r=>r.json())
            .then(d=> {
                const tempRg = d.map((rg) => <option key={rg.name} value={rg.name}>{rg.name}</option>);
                setRgDisplay(tempRg);
                setAllRgs(d);
        })
        fetch("http://localhost:3000/all_tes")
            .then(r=>r.json())
            .then(d=> {
                const tempTe = d.map((te) => <option value={te.name} key={te.name}>{te.name}</option>);
                setTeDisplay(tempTe);
                setAllTes(d);
        })

        
    }, [])

    const handleSubmit = e => {
        console.log(formData)
        fetch("http://localhost:3000/create_team", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        })
            .then(r=> r.json())
            .then(d => {
                flipState();
                sendToHome();
            })
    }

    const changeData = e => {
        switch (e.target.name){
            case "teamName":
                const temp = {...formData, [e.target.name]: e.target.value};
                setFormData(temp);
                break;
            case "quarterback":
                const qbPlyr = allQbs.find((player) => player.name === e.target.value);
                if (qbPlyr){
                    setCurrentPlayer(qbPlyr);
                    const temp = {...formData, [e.target.name]: qbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastQbPrice).toLocaleString())
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(qbPlyr.contract.replace(/,/g,''))).toLocaleString())
                    setLastQbPrice(parseInt(qbPlyr.contract.replace(/,/g,'')))
                }
                break;
            case "runningback":
                const rbPlyr = allRbs.find((player) => player.name === e.target.value)
                if (rbPlyr){
                    setCurrentPlayer(rbPlyr);
                    const temp = {...formData, [e.target.name]: rbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(rbPlyr.contract.replace(/,/g,''))).toLocaleString())
                }
                break;
            case "wideout":
                const wrPlyr = allWrs.find((player) => player.name === e.target.value)
                if (wrPlyr){
                    setCurrentPlayer(wrPlyr);
                    const temp = {...formData, [e.target.name]: wrPlyr.name};
                    setFormData(temp);
                }
                break;
            case "lefttackle":
                const ltPlyr = allLts.find((player) => player.name === e.target.value);
                if (ltPlyr){
                    setCurrentPlayer(ltPlyr);
                    const temp ={...formData, [e.target.name]: ltPlyr.name};
                    setFormData(temp);
                }
                break;
            case "righttackle":
                const rtPlyr = allRts.find((player) => player.name === e.target.value);
                if (rtPlyr){
                    setCurrentPlayer(rtPlyr);
                    const temp ={...formData, [e.target.name]: rtPlyr.name};
                    setFormData(temp);
                }
                break;
            case "center":
                const cPlyr = allCs.find((player) => player.name === e.target.value);
                if (cPlyr){
                    setCurrentPlayer(cPlyr);
                    const temp ={...formData, [e.target.name]: cPlyr.name};
                    setFormData(temp);
                }
                break;
            case "rightguard":
                const rgPlyr = allRgs.find((player) => player.name === e.target.value);
                if (rgPlyr){
                    setCurrentPlayer(rgPlyr);
                    const temp ={...formData, [e.target.name]: rgPlyr.name};
                    setFormData(temp);
                }
                break;
            case "leftguard":
                const lgPlyr = allLgs.find((player) => player.name === e.target.value);
                if (lgPlyr){
                    setCurrentPlayer(lgPlyr);
                    const temp ={...formData, [e.target.name]: lgPlyr.name};
                    setFormData(temp);
                }
                break;
            case "tightend":
                const tePlyr = allTes.find((player) => player.name === e.target.value);
                if (tePlyr){
                    setCurrentPlayer(tePlyr);
                    const temp ={...formData, [e.target.name]: tePlyr.name};
                    setFormData(temp);
                }
                break;
            default:
                console.log("default")
                break;
        }
    }

    return (
        <>
            <h2>REMAINING BUDGET: ${salarycap}</h2>
            <form onSubmit={handleSubmit}>
                Team name: <input type="text" name="teamName" onChange={changeData} value={formData.teamName} />
                <br></br><br></br>
                <select name="quarterback" onChange={changeData}>
                    <option value="none">Choose your QB</option>
                    {qbDisplay}
                </select><br></br><br></br>
                <select name="runningback" onChange={changeData}>
                    <option value="none">Choose your RB</option>
                    {rbDisplay}
                </select><br></br><br></br>
                <select name="wideout" onChange={changeData}>
                    <option value="none">Choose your WR1</option>
                    {wrDisplay}
                </select><br></br><br></br>
                <select name="lefttackle" onChange={changeData}>
                    <option value="none">Choose your Left Tackle</option>
                    {ltDisplay}
                </select><br></br><br></br>
                <select name="righttackle" onChange={changeData}>
                    <option value="none">Choose your Right Tackle</option>
                    {rtDisplay}
                </select><br></br><br></br>
                <select name="center" onChange={changeData}>
                    <option value="none">Choose your Center</option>
                    {cDisplay}
                </select><br></br><br></br>
                <select name="leftguard" onChange={changeData}>
                    <option value="none">Choose your Left Guard</option>
                    {lgDisplay}
                </select><br></br><br></br>
                <select name="rightguard" onChange={changeData}>
                    <option value="none">Choose your Right Guard</option>
                    {rgDisplay}
                </select><br></br><br></br>
                <select name="tightend" onChange={changeData}>
                    <option value="none">Choose your Tightend</option>
                    {teDisplay}
                </select><br></br><br></br>
                <input type="submit" />
            </form>
            {currentPlayer === null? null : <PlayerHighlight player={currentPlayer}/>}
        </>
    )
}

export default CreateTeamForm