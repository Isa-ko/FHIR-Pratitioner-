const showPratitionerForm = () => {
    //清空畫面並顯示 Pratitioner 表單
    let content = $('#content');

    content.empty();
    content.append(`
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
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
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
            <div class="col-sm-10">
                <input type="text" class="form-control" id="address">
            </div>
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
            </div>
            <div class="col-md-6"> 
                <div class="col-sm-12">           
                  <textarea class="form-control" id="uploadData" rows="20">
                     Cer1234567(2021/07~2025/07) 
                      
                    </textarea>
                </div>
            </div>  
        </div>
        <a onclick="uploadPatientForm()" class="btn btn-primary">送出</button>
    </div>
    </form>
    `);
}

const uploadPatientForm = () => {
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
        resourceType: 'Patient',
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
    fetch(`${baseUrl}/Patient`, {
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