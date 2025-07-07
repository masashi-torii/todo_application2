import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  // 配列で初期化する
  const [records, setRecords] = useState([]);

  // 内容への入力したものを表示していくための状態を保存する
  const [inputNaiyoValue, setInputNaiyoValue] = useState("");

  // 学習時間への入力したものを表示していくための状態を保存する
  const [inputTimeValue, setInputTimeValue] = useState("");

  // 累計時間を追加する
  const [sumTime, setSumTime] = useState("");

  // 記録を追加する
  const addRecord = () => {
    if(inputNaiyoValue == "" || inputTimeValue == ""){
      setError(true);
    }else{
      setError(false);
    }
    
    if(inputNaiyoValue && inputTimeValue){
      const newRecord = {
        title:inputNaiyoValue,
        time:parseInt(inputTimeValue)
      }
      setRecords([...records, newRecord]);

      // 累計時間を算出
      const newRecords = [...records, newRecord];
      const sumTime = newRecords.reduce((total, record) => total + record.time, 0);
      setSumTime(sumTime);

      // 入力フィールドをクリア
      setInputNaiyoValue("");
      setInputTimeValue("");
    }
  }

  // 学習内容の入力値が変更されると呼び出される
  const onChangeInputNaiyo = (event) => {
    // 入力値を設定
    setInputNaiyoValue(event.target.value);
  }
  
  // 学習時間の入力値が変更されると呼び出される
  const onChangeInputTime = (event) => {
    // 学習内容の入力値を設定
    setInputTimeValue(event.target.value);
  }

  // エラーを追加する
  const [error, setError] = useState("");

  return (
    <>
    <h1>学習記録一覧</h1>
    {error && (<p style={{ color: "red" }}>入力されていない項目があります！</p>)}
    
    <div>学習内容：
    <input input="formNaiyo" type="text" name="naiyo" value={inputNaiyoValue} onChange={onChangeInputNaiyo}></input></div>
    <div>　　学習時間：
    <input type="number" name="studyTime" value={inputTimeValue} onChange={onChangeInputTime}></input>時間</div>
    <button onClick={addRecord}>登録</button>
    <div>入力されている学習内容：{inputNaiyoValue}</div>
    <div>入力されている時間：{inputTimeValue}時間</div>
    <h3>--一覧--</h3>
    <div>
    {records.map(record =>(
      <ul key={record.title + record.time}>
      {record.title + "　　　" + record.time + "時間"}
    </ul>
    ))}
    </div>
    <p>合計時間： {sumTime}/1000(h)</p>
    </>
    )
}

export default App