$(document).ready(()=>{
    
    const url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products';

    $.get(url , (data)=>{
        // console.log(data)
        let count = data.length
    

        data.forEach(product => {
            const rowHtml = `<tr class="tbody_row">
            <td>${product.id}</td>
            <td>${product.medicineName}</td>
            <td>${product.medicineBrand} </td>
            <td>${product.expiryDate}</td>
            <td>${product.unitPrice}</td>
            <td>${product.stock}</td>
        </tr>`


        $('#tbody').append(rowHtml)
        });
        $('#count').html(count)
    });


    $('#logout').click(()=>{
        // alert('yes')
        localStorage.removeItem('user_data')
        window.location.href = 'index.html'
    })






});