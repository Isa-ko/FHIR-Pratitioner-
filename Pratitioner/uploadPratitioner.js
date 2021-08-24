const showPratitionerForm = () => {
    //清空畫面並顯示 Pratitioner 表單
    let content = $('#content');

    content.empty();
    content.append(`
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        
    </head>   
    <body>
    
    <form>
    <div class="container">
        <br/>
        <h3 class="row">人員基本資料登錄</h3>

        <div class="form-group row">
            <label class="col-md-2 col-form-label">姓名</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="name"> 
            </div>
            <label class="col-md-2 col-form-label">個人照片</label>
            <img class="col-md-2 src="..." class="img-thumbnail" alt="200x200">
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">性別</label>
            <div class="col-sm-10">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="gender-male" name="gender" class="col-sm-2">
                    <label class="col-sm-3" for="gender-male">男性</label>

                    <input type="radio" id="gender-female" name="gender" class="col-sm-2">
                    <label class="col-sm-3" for="gender-female">女性</label>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">出生年月日</label>
            <div class="col-sm-4">
                <input type="date" class="form-control" id="birthDate">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">身分證字號</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="identifier">
            </div>
        </div>
        
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">聯絡電話</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="telecom">
            </div>
            <label class="col-sm-2 col-form-label">電子信箱</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="email" placeholder="name@example.com">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">語言</label>
            <div class="col-sm-10">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" value="" id="inlineCheckbox1" checked>
                  <label class="form-check-label" for="inlineCheckbox1">
                   中文 
                  </label>
                </div>
                <div class="form-check form-check-inline">    
                  <input class="form-check-input" type="checkbox" value="" id="inlineCheckbox2">
                  <label class="form-check-label" for="inlineCheckbox2">
                    英文
                  </label>
                </div>
                <div class="form-check form-check-inline">    
                  <input class="form-check-input" type="checkbox" value="" id="inlineCheckbox3">
                  <label class="form-check-label" for="inlineCheckbox3">
                    台語
                  </label>
                </div>
                <div class="form-check form-check-inline">    
                  <input class="form-check-input" type="checkbox" value="" id="inlineCheckbox4">
                  <label class="form-check-label" for="inlineCheckbox4">
                    客語
                  </label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">地址</label>
            <label class="col-sm-1 col-form-label">郵遞區號</label>
                <div class="col-sm-1">
                    <input type="text" class="form-control" id="postalCode">
                </div>
            <label class="col-sm-1 col-form-label">縣(市)</label>
                <div class="col-sm-2">
                <select class="form-select" aria-label="city">
                  <option selected>縣市選擇</option>
                    <option value="基隆市">基隆市</option>
                    <option value="台北市">台北市</option>
                    <option value="台北縣">台北縣</option>
                    <option value="桃園縣">桃園縣</option>
                    <option value="新竹市">新竹市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="台中市">台中市</option>
                    <option value="台中縣">台中縣</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="台南市">台南市</option>
                    <option value="台南縣">台南縣</option>
                    <option value="高雄市">高雄市</option>
                    <option value="高雄縣">高雄縣</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="台東縣">台東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="連江縣">連江縣</option>
                </select>
                </div>
            <label class="col-sm-1 col-form-label">行政區</label>
                <div class="col-sm-2">
                    <input type="text" class="form-control" id="district">
                </div>
            
            <label class="col-sm-1 offset-sm-2 col-form-label">路段弄巷號</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="line">
                
            
            
        </div>
        <br/>
        <div class="row">
            <h4>執照登錄</h4>
            <div class="col-md-6">
                <div class="form-group row">        
                    <label class="col-sm-4 col-form-label">證號登錄</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="cerfNumber">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">起始日期</label>
                    <div class="col-sm-5">
                        <input type="date" class="form-control" id="startDate">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">結束日期</label>
                    <div class="col-sm-5">
                        <input type="date" class="form-control" id="endDate">
                    </div>
                </div>
                 <div class="form-group row">
                    <label class="col-sm-4 col-form-label">簽發單位</label>
                    <div class="col-sm-5">
                       <select class="form-select" aria-label="release">
                          <option selected>單位選擇</option>
                            <option value="考試院">考試院</option>
                            <option value="行政院衛生署">行政院衛生署</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    
                </div>
            </div>

            <div class="col-md-6"> 
                <div class="col-sm-12">           
                  <textarea class="form-control" id="uploadData" rows="20">
                     Cer1234567(2021/07~2025/07) 
                      
                    </textarea>
                </div>
            </div>  

        </div>
      
    </div>
         <a onclick="uploadPractitionerForm()" class="btn btn-primary">登錄</button>
    </form>
       
    </body>
   
    `);
}

const uploadPractitionerForm = () => {
    let content = $('#content');

    // 清除警告訊息
    $('.alert').remove();

    // 檢查資料
    if( $('#name').val() === '') {
        content.prepend(`
        <div class="alert alert-danger">請填寫姓名！</div>
        `);
    }

    if( $('#identifier').val() === '') {
        content.prepend(`
        <div class="alert alert-danger">請填寫身分證字號！</div>
        `);
    }

    if (!($('#gender-male:checked').val() || $('#gender-female:checked').val())) {
        content.prepend(`
        <div class="alert alert-danger">請勾選性別！</div>
        `);
    }

    if( $('#birthDate').val() === '') {
        content.prepend(`
        <div class="alert alert-danger">請選擇出生年月日！</div>
        `);
    }

    // 資料檢查完畢，開始寫入
    const fhirData = {
        resourceType: 'Practitioner',
        identifier: [{
            use: 'usual',
            type: {
                text: '身分證字號'
            },
            value:  $('#identifier').val(),
            assigner: {
                display: '內政部'
            }
        }],
        active: true,
        name: [{
            text: $('#name').val()
        }],
        gender: ($('#gender-male:checked').val())?'male':'female',
        birthDate: $('#birthDate').val(),
        address: [{
            use: 'home',
            text: $('#address').val() || ''
        }],
        telecom:[{
            use: 'home',
            system: 'phone',
            value: $('#telecom').val() || ''
        }]
    };

    // 送出至伺服器
    fetch(`${baseUrl}/Practitioner`, {
        method: 'POST',
        body: JSON.stringify(fhirData),
        headers: {'Content-Type': 'application/fhir+json;charset=utf-8'}
    })
    .then(res => res.json())
    .then(response => {
        content.empty();
        content.append(`
            <div class="col-md-12">
                <h4>請求資料</h4>
                <textarea class="form-control" rows="15">${JSON.stringify(fhirData, null, 4)}"></textarea>
                <h4>回應資料</h4>
                <textarea class="form-control" rows="15">${JSON.stringify(response, null, 4)}</textarea>
            </div>
        `);
    });
}