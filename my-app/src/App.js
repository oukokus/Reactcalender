import './App.css';
import { useState, useEffect } from 'react'
import { Link, Route, Routes,Outlet } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [])
  //


  return (
    <div className="App"> 
          <div class="calendar_area">
                <div class="calendar_header">
                    <p id="year_month_label"></p>
                    <button id="prev_month_btn" onClick="prev_month()"><i class="fas fa-angle-left"></i></button>
                    <button id="next_month_btn" onClick="next_month()"><i class="fas fa-angle-right"></i></button>
                </div>
                <div id="calendar_body"></div>
                <div id="modal" class="modal">
                    <div class="modal-content">
                        <table class="table">
                            <thead id="reviewArea">
                                <tr class="trClass">
                                    <th>注文者名</th>
                                    <th>注文者電話</th>
                                    <th>注文者住所</th>
                                    <th>注文商品</th>
                                    <th>個数</th>
                                    <th>価格</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
        </div>
        </div>
             <div id="list">
                      <h2>商品注文顧客管理リスト</h2>
                    <button id="addBtn"><Link to="/Infoadd">情報追加</Link></button>
                    <thead>
                        <tr>
                            <th>注文者名</th>
                            <th>注文者電話</th>
                            <th>注文者住所</th>
                            <th>注文商品</th>
                            <th>注文日付</th>
                            <th>個数</th>
                            <th>価格</th>
                        </tr>
                    </thead>
            </div>
    </div>
  );
}

export default App;
