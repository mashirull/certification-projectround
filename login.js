$(document).ready(()=>{

    
    
    // alert('hello')
    
    $('#log_btn').click(()=>{
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let obj_data ={
            username : username,
            password : password
        }

        let array_data = [];
        array_data.push(obj_data)

        // console.log(array_data)

        if(username.trim()!='' || password.trim() !=''){

            if(username == password){
                localStorage.setItem('user_data',JSON.stringify(array_data))
                alert('Login Succecfully')
                window.location.href = 'order.html';
            }
            else{
                alert('Please Enter Valid Cradantial')
            }

        }
        else{
            alert('Please Enter Valid Cradantial')
        }
        


        
    })
    
    
    
    
    
    
    var local_data = JSON.parse(localStorage.getItem('user_data'));
    // console.log(local_data.length)
    if(local_data.length >= 1){
        window.location.href = 'order.html'
    }
    










});