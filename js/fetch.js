$.getJSON('../data/portfolio.json', function (data) {
    // console.log(data);
    // masuk ke menu
    let pt = data;
    $.each(pt, function(i, data) {
        let detailPageUrl = 'portfolio-single.html?id=' + data.id;
        $('#daftar-portfolio').append(`
        <div class="col-lg-4 col-6 mb-4 shuffle-item">

				<div class="card mb-3">
					<img src="`+ data.image + `" class="card-img-top" alt="...">
					<div class="card-body">
						<span>`+ data.year +`</span>
						<h4 class="card-title">` + data.title + `</h4> 
						<span>Role: <b>` + data.role + `</b></span><br>
						<span>Tech: <b>` + data.tech + `</b></span><br>
						<span>Purpose: <b>` + data.category + `</b></span><br>
						<br>
						<a href="`+ detailPageUrl + `" class="btn btn-primary btn-detail">Detail</a>
						
					</div>
	                
	            </div>
	      	</div>
        
        `);
    });
});

// $('.btn-cat').on('click', function() {

//     let kategori = $(this).html();

//     $.getJSON('../data/portfolio.json', function(data) {
//         let pt = data;
//         let content = '';
//         // tampilin berdasarkan kategori
//         $.each(pt, function(i, data) {
//             // kalo data kategori sama dgn kategori yg diklik
//             if( data.category == kategori.toLowerCase() || kategori == "All Projects") {
//                 content += `
//                 <div class="col-lg-4 col-6 mb-4" >

// 				<div class="card mb-3" style="width: 20rem;">
// 					<img src="`+ data.image + `" class="card-img-top" alt="...">
// 					<div class="card-body">
// 						<span>`+ data.year +`</span>
// 						<h4 class="card-title">` + data.title + `</h4> 
// 						<span>Role: <b>` + data.role + `</b></span><br>
// 						<span>Tech: <b>` + data.tech + `</b></span><br>
// 						<span>Category: <b>` + data.category + `</b></span><br>
// 						<br>
// 						<a href="`+ detailPageUrl + `" class="btn btn-primary">Detail</a>
						
// 					</div>
	                
// 	            </div>
// 	      	</div>
//                 `;
//             }
//         });
//         // hanya tampilkan sesuai kategori
//         $('#daftar-portfolio').html(content);
//     });

    
// });



// // Get the ID from the URL query parameter

$(document).ready(function() {
    //localStorage.removeItem('itemData');
    $('#daftar-portfolio').on('click', '.btn-detail', function() {
        let id = $(this).attr('href').split('?id=')[1];

    // Get the JSON data
        $.getJSON('../data/portfolio.json', function (data) {
            // Find the item in the JSON data with the matching ID
            const item = data.find(item => item.id == id);

            // Use the item data as needed
            if (item) {
                localStorage.setItem('itemData', JSON.stringify(item));
                
            } else {
                console.log('Item not found');
            }
        });
    });
});

$(document).ready(function() {
    // Retrieve the 'item' data from localStorage
    const itemDataString = localStorage.getItem('itemData');
    if (itemDataString) {
        const itemData = JSON.parse(itemDataString);
        // Use the 'itemData' as needed in your detail page
        console.log(itemData);
        // Update the content of your detail page with the 'itemData'
        $('.detail-body').html(`
        <section class="page-title section pb-0">
	<div class="container">
	  <div class="row">
		<div class="col-lg-12">
		  <div class="text-center">
			<h1 class="text-capitalize mb-0 text-lg title-port">`+ itemData.title +`</h1>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  
  
  <section class="section portfolio-single">
	  <div class="container">
		  <div class="row justify-content-center">
			  <div class="col-lg-8">
				  <div class="project-info">
					  <h3 class="mb-4">` + itemData.c + `</h3>
					  <p>`+ itemData.year +`</p>
					  <p>`+ itemData.description +`</p>
  
					  
				  </div>
  
				  <div class="my-5">
					  <img src="`+ itemData.image +`" alt="" class="img-fluid w-100">
				  </div>
  
				  <div class="row mt-4">
					  <div class="col-lg-6">
						  <div class="info">
							  <h5 class="mb-0">Role</h5>
							  <p>`+ itemData.role +`</p>
						  </div>
  
						  <div class="info">
							  <h5 class="mb-0">Tech</h5>
							  <p>`+ itemData.tech +`</p>
						  </div>
					  </div>
  
					  <div class="col-lg-6">
						  <div class="info">
							  <h5 class="mb-0">Purpose</h5>
							  <p>`+ itemData.category + `</p>
						  </div>
						  <div class="info">
							  <h5>Link</h5>
							  <a href="`+ itemData.url +`" target="_blank">Source Code/Demo</a>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>
        
        `);
        // Clear the 'itemData' from localStorage after use (optional)
        
    } else {
        console.log('Item data not found');
    }
});


