import React, {useState, useEffect} from "react"
import PlayerHighlight from "./PlayerHighlight"
import OngoingTeam from "./OngoingTeam"

const CreateTeamForm = ({sendToHome, user, setUser}) => {
    const [qbDisplay, setQbDisplay] = useState(null);
    const [rbDisplay, setRbDisplay] = useState(null);
    const [wrDisplay, setWrDisplay] = useState(null);
    const [ltDisplay, setLtDisplay] = useState(null);
    const [rtDisplay, setRtDisplay] = useState(null);
    const [lgDisplay, setLgDisplay] = useState(null);
    const [rgDisplay, setRgDisplay] = useState(null);
    const [cDisplay, setCDisplay] = useState(null);
    const [teDisplay, setTeDisplay] = useState(null);
    const [leDisplay, setLeDisplay]= useState(null);
    const [reDisplay, setReDisplay]= useState(null);
    const [dtDisplay, setDtDisplay]= useState(null);
    const [lolbDisplay, setLolbDisplay]= useState(null);
    const [rolbDisplay, setRolbDisplay]= useState(null);
    const [mlbDisplay, setMlbDisplay]= useState(null);
    const [cbDisplay, setCbDisplay]= useState(null);
    const [fsDisplay, setFsDisplay]= useState(null);
    const [ssDisplay, setSsDisplay]= useState(null);
    const [allQbs, setAllQbs]=useState(null);
    const [allRbs, setAllRbs]=useState(null);
    const [allWrs, setAllWrs]=useState(null);
    const [allLts, setAllLts]=useState(null);
    const [allRts, setAllRts]=useState(null);
    const [allRgs, setAllRgs]=useState(null);
    const [allLgs, setAllLgs]=useState(null);
    const [allCs, setAllCs]=useState(null);
    const [allTes, setAllTes]=useState(null);
    const [allLes, setAllLes]=useState(null);
    const [allRes, setAllRes]=useState(null);
    const [allDts, setAllDts]=useState(null);
    const [allLolbs, setAllLolbs]=useState(null);
    const [allRolbs, setAllRolbs]=useState(null);
    const [allMlbs, setAllMlbs]=useState(null);
    const [allCbs, setAllCbs]=useState(null);
    const [allFs, setAllFs]=useState(null);
    const [allSs, setAllSs]=useState(null);
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
        tightend: "",
        leftend: "",
        rightend: "",
        dtackle: "",
        lolb: "",
        rolb: "",
        mlb: "",
        cb: "",
        ss: "",
        fs: "",
        cb2: "",
        wr2: ""
    });
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [salaryCap, setSalaryCap] = useState("300,000,000");
    const [lastQbPrice, setLastQbPrice] = useState(0);
    const [lastRbPrice, setLastRbPrice] = useState(0);
    const [lastWrPrice, setLastWrPrice] = useState(0);
    const [lastLtPrice, setLastLtPrice] =  useState(0);
    const [lastRtPrice, setLastRtPrice] = useState(0);
    const [lastCPrice, setLastCPrice] = useState(0);
    const [lastLgPrice, setLastLgPrice] = useState(0);
    const [lastRgPrice, setLastRgPrice] = useState(0);
    const [lastTePrice, setLastTePrice] = useState(0);
    const [lastLePrice, setLastLePrice] = useState(0);
    const [lastRePrice, setLastRePrice] = useState(0);
    const [lastDtPrice, setLastDtPrice] = useState(0);
    const [lastLolbPrice, setLastLolbPrice] = useState(0);
    const [lastRolbPrice, setLastRolbPrice] = useState(0);
    const [lastMlbPrice, setLastMlbPrice] = useState(0);
    const [lastCbPrice, setLastCbPrice] = useState(0);
    const [lastFsPrice, setLastFsPrice] = useState(0);
    const [lastSsPrice, setLastSsPrice] = useState(0);
    const [lastWr2Price, setLastWr2Price] = useState(0);
    const [lastCb2Price, setLastCb2Price] = useState(0);
    useEffect(() => {
        fetch("http://localhost:3000/all_qbs")
            .then(r=> r.json())
            .then(d => {
                const tempQb = d.map((qb) => <option key={qb.name} value={qb.name}>{qb.name} ({qb.team}) - ${qb.contract}</option>);
                setQbDisplay(tempQb);
                setAllQbs(d);
            })
        fetch("http://localhost:3000/all_rbs")
            .then(r=>r.json())
            .then(d=> {
                const tempRb = d.map((rb) => <option className="playerOption" key={rb.name} value={rb.name}>{rb.name} ({rb.team}) - ${rb.contract}</option>);
                setRbDisplay(tempRb);
                setAllRbs(d);
            })
        fetch("http://localhost:3000/all_wrs")
            .then(r=>r.json())
            .then(d=> {
                const tempWr = d.map((wr) => <option key={wr.name} value={wr.name}>{wr.name} ({wr.team}) - ${wr.contract}</option>);
                setWrDisplay(tempWr);
                setAllWrs(d);
            })
        fetch("http://localhost:3000/all_lts")
            .then(r=>r.json())
            .then(d=> {
                const tempLt = d.map((lt) => <option key={lt.name} value={lt.name}>{lt.name} ({lt.team}) - ${lt.contract}</option>);
                setLtDisplay(tempLt);
                setAllLts(d);
            })
        fetch("http://localhost:3000/all_rts")
            .then(r=>r.json())
            .then(d=> {
                const tempRt = d.map((rt) => <option key={rt.name} value={rt.name}>{rt.name} ({rt.team}) - ${rt.contract}</option>);
                setRtDisplay(tempRt);
                setAllRts(d);
        })
        fetch("http://localhost:3000/all_cs")
            .then(r=>r.json())
            .then(d=> {
                const tempC = d.map((c) => <option key={c.name} value={c.name}>{c.name} ({c.team}) - ${c.contract}</option>);
                setCDisplay(tempC);
                setAllCs(d);
        })
        fetch("http://localhost:3000/all_lgs")
            .then(r=>r.json())
            .then(d=> {
                const tempLg = d.map((lg) => <option key={lg.name} value={lg.name}>{lg.name} ({lg.team}) - ${lg.contract}</option>);
                setLgDisplay(tempLg);
                setAllLgs(d);
        })
        fetch("http://localhost:3000/all_rgs")
            .then(r=>r.json())
            .then(d=> {
                const tempRg = d.map((rg) => <option key={rg.name} value={rg.name}>{rg.name} ({rg.team}) - ${rg.contract}</option>);
                setRgDisplay(tempRg);
                setAllRgs(d);
        })
        fetch("http://localhost:3000/all_tes")
            .then(r=>r.json())
            .then(d=> {
                const tempTe = d.map((te) => <option value={te.name} key={te.name}>{te.name} ({te.team}) - ${te.contract}</option>);
                setTeDisplay(tempTe);
                setAllTes(d);
        })
        fetch("http://localhost:3000/all_les")
            .then(r=>r.json())
            .then(d=> {
                const tempLe = d.map((le) => <option value={le.name} key={le.name}>{le.name} ({le.team}) - ${le.contract}</option>);
                setLeDisplay(tempLe);
                setAllLes(d);
        })
        fetch("http://localhost:3000/all_res")
            .then(r=>r.json())
            .then(d=> {
                const tempRe = d.map((re) => <option value={re.name} key={re.name}>{re.name} ({re.team}) - ${re.contract}</option>);
                setReDisplay(tempRe);
                setAllRes(d);
        })
        fetch("http://localhost:3000/all_dts")
            .then(r=>r.json())
            .then(d=> {
                const tempDt = d.map((dt) => <option value={dt.name} key={dt.name}>{dt.name} ({dt.team}) - ${dt.contract}</option>);
                setDtDisplay(tempDt);
                setAllDts(d);
        })
        fetch("http://localhost:3000/all_lolbs")
            .then(r=>r.json())
            .then(d=> {
                const tempLolb = d.map((lolb) => <option value={lolb.name} key={lolb.name}>{lolb.name} ({lolb.team}) - ${lolb.contract}</option>);
                setLolbDisplay(tempLolb);
                setAllLolbs(d);
        })
        fetch("http://localhost:3000/all_rolbs")
            .then(r=>r.json())
            .then(d=> {
                const tempRolb = d.map((player) => <option value={player.name} key={player.name}>{player.name} ({player.team}) - ${player.contract}</option>);
                setRolbDisplay(tempRolb);
                setAllRolbs(d);
        })
        fetch("http://localhost:3000/all_mlbs")
            .then(r=>r.json())
            .then(d=> {
                const tempMlb = d.map((player) => <option value={player.name} key={player.name}>{player.name} ({player.team}) - ${player.contract}</option>);
                setMlbDisplay(tempMlb);
                setAllMlbs(d);
        })
        fetch("http://localhost:3000/all_cbs")
            .then(r=>r.json())
            .then(d=> {
                const tempCb = d.map((player) => <option value={player.name} key={player.name}>{player.name} ({player.team}) - ${player.contract}</option>);
                setCbDisplay(tempCb);
                setAllCbs(d);
        })
        fetch("http://localhost:3000/all_ss")
            .then(r=>r.json())
            .then(d=> {
                const tempSs = d.map((player) => <option value={player.name} key={player.name}>{player.name} ({player.team}) - ${player.contract}</option>);
                setSsDisplay(tempSs);
                setAllSs(d);
        })
        fetch("http://localhost:3000/all_fs")
            .then(r=>r.json())
            .then(d=> {
                const tempFs = d.map((player) => <option value={player.name} key={player.name}>{player.name} ({player.team}) - ${player.contract}</option>);
                setFsDisplay(tempFs);
                setAllFs(d);
        })
        
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        let empty;
        for(let i in formData){
            if(formData[i] ==="none" || formData[i] === ""){
                empty = true;
            }
        }
        if(parseInt(salaryCap.replace(/,/g,'')) < 0 ){
            alert("Too expensive!");
        }else if(empty){
            alert("You Must Fill All Positions!");
        }else if(formData.wideout === formData.wr2 || formData.cb === formData.cb2){
            alert("You cannot have the same player twice!");
        }else{
            fetch("http://localhost:3000/create_team", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
            })
                .then(r=> r.json())
                .then(d => {
                    setUser(d);
                    sendToHome();
                })
        }
    }

    const changeData = e => {
        switch (e.target.name){
            case "teamName":
                const temp = {...formData, [e.target.name]: e.target.value};
                setFormData(temp);
                break;
            case "quarterback":
                const qbPlyr = allQbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastQbPrice).toLocaleString())
                if (qbPlyr){
                    setCurrentPlayer(qbPlyr);
                    const temp = {...formData, [e.target.name]: qbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(qbPlyr.contract.replace(/,/g,''))).toLocaleString())
                    setLastQbPrice(parseInt(qbPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastQbPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "runningback":
                const rbPlyr = allRbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastRbPrice).toLocaleString());
                if (rbPlyr){
                    setCurrentPlayer(rbPlyr);
                    const temp = {...formData, [e.target.name]: rbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(rbPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastRbPrice(parseInt(rbPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastRbPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "wideout":
                const wrPlyr = allWrs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastWrPrice).toLocaleString());
                if (wrPlyr){
                    setCurrentPlayer(wrPlyr);
                    const temp = {...formData, [e.target.name]: wrPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(wrPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastWrPrice(parseInt(wrPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastWrPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "wr2":
                const wr2Plyr = allWrs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastWr2Price).toLocaleString());
                if (wr2Plyr){
                    setCurrentPlayer(wr2Plyr);
                    const temp = {...formData, [e.target.name]: wr2Plyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(wr2Plyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastWr2Price(parseInt(wr2Plyr.contract.replace(/,/g,'')))
                }else{
                    setLastWr2Price(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "lefttackle":
                const ltPlyr = allLts.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastLtPrice).toLocaleString());
                if (ltPlyr){
                    setCurrentPlayer(ltPlyr);
                    const temp ={...formData, [e.target.name]: ltPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(ltPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastLtPrice(parseInt(ltPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastLtPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "righttackle":
                const rtPlyr = allRts.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastRtPrice).toLocaleString());
                if (rtPlyr){
                    setCurrentPlayer(rtPlyr);
                    const temp ={...formData, [e.target.name]: rtPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(rtPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastRtPrice(parseInt(rtPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastRtPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "center":
                const cPlyr = allCs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastCPrice).toLocaleString());
                if (cPlyr){
                    setCurrentPlayer(cPlyr);
                    const temp ={...formData, [e.target.name]: cPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(cPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastCPrice(parseInt(cPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastCPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "rightguard":
                const rgPlyr = allRgs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastRgPrice).toLocaleString());
                if (rgPlyr){
                    setCurrentPlayer(rgPlyr);
                    const temp ={...formData, [e.target.name]: rgPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(rgPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastRgPrice(parseInt(rgPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastRgPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "leftguard":
                const lgPlyr = allLgs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastLgPrice).toLocaleString());
                if (lgPlyr){
                    setCurrentPlayer(lgPlyr);
                    const temp ={...formData, [e.target.name]: lgPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(lgPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastLgPrice(parseInt(lgPlyr.contract.replace(/,/g,'')));
                }else{
                    setLastRtPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "tightend":
                const tePlyr = allTes.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastTePrice).toLocaleString());
                if (tePlyr){
                    setCurrentPlayer(tePlyr);
                    const temp ={...formData, [e.target.name]: tePlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(tePlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastTePrice(parseInt(tePlyr.contract.replace(/,/g,'')))
                }else{
                    setLastTePrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "leftend":
                const lePlyr = allLes.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastLePrice).toLocaleString());
                if (lePlyr){
                    setCurrentPlayer(lePlyr);
                    const temp ={...formData, [e.target.name]: lePlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(lePlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastLePrice(parseInt(lePlyr.contract.replace(/,/g,'')))
                }else{
                    setLastLePrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "rightend":
                const rePlyr = allRes.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastRePrice).toLocaleString());
                if (rePlyr){
                    setCurrentPlayer(rePlyr);
                    const temp ={...formData, [e.target.name]: rePlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(rePlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastRePrice(parseInt(rePlyr.contract.replace(/,/g,'')))
                }else{
                    setLastRePrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "dtackle":
                const dtPlyr = allDts.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastDtPrice).toLocaleString());
                if (dtPlyr){
                    setCurrentPlayer(dtPlyr);
                    const temp ={...formData, [e.target.name]: dtPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(dtPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastDtPrice(parseInt(dtPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastDtPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "lolb":
                const lolbPlyr = allLolbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastLolbPrice).toLocaleString());
                if (lolbPlyr){
                    setCurrentPlayer(lolbPlyr);
                    const temp ={...formData, [e.target.name]: lolbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(lolbPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastLolbPrice(parseInt(lolbPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastLolbPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "rolb":
                const rolbPlyr = allRolbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastRolbPrice).toLocaleString());
                if (rolbPlyr){
                    setCurrentPlayer(rolbPlyr);
                    const temp ={...formData, [e.target.name]: rolbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(rolbPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastRolbPrice(parseInt(rolbPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastRolbPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "mlb":
                const mlbPlyr = allMlbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastMlbPrice).toLocaleString());
                if (mlbPlyr){
                    setCurrentPlayer(mlbPlyr);
                    const temp ={...formData, [e.target.name]: mlbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(mlbPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastMlbPrice(parseInt(mlbPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastMlbPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "cb":
                const cbPlyr = allCbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastCbPrice).toLocaleString());
                if (cbPlyr){
                    setCurrentPlayer(cbPlyr);
                    const temp ={...formData, [e.target.name]: cbPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(cbPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastCbPrice(parseInt(cbPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastCbPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "cb2":
                const cb2Plyr = allCbs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastCb2Price).toLocaleString());
                if (cb2Plyr){
                    setCurrentPlayer(cb2Plyr);
                    const temp ={...formData, [e.target.name]: cb2Plyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(cb2Plyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastCb2Price(parseInt(cb2Plyr.contract.replace(/,/g,'')))
                }else{
                    setLastCb2Price(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "fs":
                const fsPlyr = allFs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastFsPrice).toLocaleString());
                if (fsPlyr){
                    setCurrentPlayer(fsPlyr);
                    const temp ={...formData, [e.target.name]: fsPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(fsPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastFsPrice(parseInt(fsPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastFsPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            case "ss":
                const ssPlyr = allSs.find((player) => player.name === e.target.value);
                setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) + lastSsPrice).toLocaleString());
                if (ssPlyr){
                    setCurrentPlayer(ssPlyr);
                    const temp ={...formData, [e.target.name]: ssPlyr.name};
                    setFormData(temp);
                    setSalaryCap((s) => (parseInt(s.replace(/,/g,'')) - parseInt(ssPlyr.contract.replace(/,/g,''))).toLocaleString());
                    setLastSsPrice(parseInt(ssPlyr.contract.replace(/,/g,'')))
                }else{
                    setLastSsPrice(0);
                    const temp = {...formData, [e.target.name]: e.target.value};
                    setFormData(temp);
                }
                break;
            default:
                console.log("default")
                break;
        }
    }

    return (
        <div id="fullCreateForm">
            <h2 id="remainingbudget">REMAINING BUDGET: ${salaryCap}</h2>
            <span id="createTeamName">Team name: <input type="text" name="teamName" id="teamNameField" onChange={changeData} value={formData.teamName} /> </span>
            <form id="createTeamForm" onSubmit={handleSubmit}>
                <br></br>
                <span id="oSkillPositionsSpan">
                    <h3 className="createFormPositionGroup">Offense Skill Positions</h3>
                    <select className="playerSelect" name="quarterback" onChange={changeData}>
                        <option value="none">Choose your QB</option>
                        {qbDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="runningback" onChange={changeData}>
                        <option className="playerOption" value="none">Choose your RB</option>
                        {rbDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="wideout" onChange={changeData}>
                        <option value="none">Choose your WR1</option>
                        {wrDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="wr2" onChange={changeData}>
                        <option value="none">Choose your WR2</option>
                        {wrDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="tightend" onChange={changeData}>
                        <option value="none">Choose your Tightend</option>
                        {teDisplay}
                    </select>
                </span>
                <span id="olineSpan">
                    <h3 className="createFormPositionGroup">Offensive Line</h3>
                    <select className="playerSelect" name="lefttackle" onChange={changeData}>
                        <option value="none">Choose your Left Tackle</option>
                        {ltDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="leftguard" onChange={changeData}>
                        <option value="none">Choose your Left Guard</option>
                        {lgDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="center" onChange={changeData}>
                        <option value="none">Choose your Center</option>
                        {cDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="rightguard" onChange={changeData}>
                        <option value="none">Choose your Right Guard</option>
                        {rgDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="righttackle" onChange={changeData}>
                        <option value="none">Choose your Right Tackle</option>
                        {rtDisplay}
                    </select>
                </span>
                <span id="dlineSpan">
                    <h3 className="createFormPositionGroup">Defensive Line</h3>
                    <select className="playerSelect" name="leftend" onChange={changeData}>
                        <option value="none">Choose your Left End</option>
                        {leDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="dtackle" onChange={changeData}>
                        <option value="none">Choose your Defensive Tackle</option>
                        {dtDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="rightend" onChange={changeData}>
                        <option value="none">Choose your Right End</option>
                        {reDisplay}
                    </select>
                </span>
                <span id="lbSpan">
                    <h3 className="createFormPositionGroup">Linebackers</h3>
                    <select className="playerSelect" name="lolb" onChange={changeData}>
                        <option value="none">Choose your Left Outside Linebacker</option>
                        {lolbDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="mlb" onChange={changeData}>
                        <option value="none">Choose your Middle Linebacker</option>
                        {mlbDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="rolb" onChange={changeData}>
                        <option value="none">Choose your Right Outside Linebacker</option>
                        {rolbDisplay}
                    </select>
                </span>
                <span id="secondarySpan">
                    <h3 className="createFormPositionGroup">Secondary</h3>
                    <select className="playerSelect" name="cb" onChange={changeData}>
                        <option value="none">Choose your Cornerback</option>
                        {cbDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="cb2" onChange={changeData}>
                        <option value="none">Choose your CB2</option>
                        {cbDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="fs" onChange={changeData}>
                        <option value="none">Choose your Free Safety</option>
                        {fsDisplay}
                    </select>{` `}
                    <select className="playerSelect" name="ss" onChange={changeData}>
                        <option value="none">Choose your Strong Safety</option>
                        {ssDisplay}
                    </select><br></br><br></br>
                </span>
                <input className="hvr-rectangle-out" id="submitNewTeam" type="submit" value="Create Team"/>
            </form>
            {currentPlayer === null? null : <PlayerHighlight player={currentPlayer}/>}
            {<OngoingTeam team={formData}/>}
        </div>
    )
}

export default CreateTeamForm