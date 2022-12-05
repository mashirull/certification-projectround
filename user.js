$(document).ready(()=>{
    const url  ='https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users';

    $.get(url,(data) =>{
      
        data.forEach(user => {
            const rowHtml = `<tr class="tbody_row">
            <td>${user.id}</td>
            <td><img src=${user.profilePic}></td>
            <td>${user.fullName} </td>
            <td>${user.dob}</td>
            <td>${user.gender}</td>
            <td>${user.currentCity}</td>
        </tr>`


        $('#tbody').append(rowHtml)
            
        });


    });

    $('#logout').click(()=>{
        // alert('yes')
        localStorage.removeItem('user_data')
        window.location.href = 'index.html'
    })

});
