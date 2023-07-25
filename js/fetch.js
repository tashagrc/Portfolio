jsonData = [
    {
      "id": 1,
      "title": "ReadRacoon",
      "year": 2023,
      "role" : "Full-Stack Web Developer",
      "tech": "Laravel 8, MySQL",
      "url": "https://github.com/tashagrc/lms_softwareengineering",
      "category": "College Assignment",
      "description": "While Indonesia has a high literacy rate among young people, functional literacy is still lacking. ReadRacoon is an educational website for students to improve their interest and comprehension in reading. Students will analyze the main topic, purpose, and conclusion of each article, and synthesize the article into a new writing. As a developer in a team of 5, my role revolved around developing the database structure, answer quiz, and achievement functionality.",
      "image": "../images/readracoon.svg",
      "c": "Website"
    },
    {
      "id": 2,
      "title": "Seekers",
      "year": 2023,
      "role" : "Mobile Developer",
      "tech": "Flutter, Firebase",
      "url": "https://github.com/tashagrc/seekers",
      "category": "Competition",
      "description": "Seekers encourage visually impaired children to explore their surroundings through touch. Equipped with a camera, object detection, and talk-back feature, Seekers assists visually impaired children in recognizing objects. The application provides a platform for visually impaired and sighted children to interact and describe things together. As a developer in a team of 2, my role revolved around developing Sighted Peer functionality, including a dashboard, educational articles, game finder, object description game, and game history.",
      "image": "../images/seekers.svg",
      "c": "Mobile App"
    },
    {
      "id": 3,
      "title": "Infarm",
      "year": 2023,
      "role" : "Mobile Developer",
      "tech": "Flutter, Firebase",
      "url": "https://github.com/tashagrc/infarm",
      "category": "Competition",
      "description": "Most farmers (77.1 to 92.4%) had limited access to agricultural inputs during COVID-19 pandemic. Infarm is a mobile commerce platform that provides a convenient and efficient solution to make essential farm inputs, including seeds, fertilizers, herbicides, fungicides, and insecticides, easily accessible to farmers. As a developer in a team of 2, my role revolved around developing category and subcategory functionality, search product, payment, product wish list, chat, and product detail.",
      "image": "../images/infarm.svg",
      "c": "Mobile App"
    },
    {
      "id": 4,
      "title": "K-POP Station",
      "year": 2023,
      "role" : "Full Stack Web Developer",
      "tech": "ASP .NET C#, SAP Crystal Report",
      "url": "https://github.com/tashagrc/KpopZtation_GroupB",
      "category": "College Assignment",
      "description": "K-POP Station is a merchandise store that showcases a diverse collection of albums from popular K-POP artists and allows the customer to purchase their favorite albums. K-POP Station was developed using Domain Driven Design Pattern and contains a view, controller, handler, repository, factory, and model layer. K-POP Station has three roles: customer, admin, and guest. There are 13 pages including login, register, artist list, artist detail, insert artist, update artist, insert album, update album, album list, album detail, cart, transaction history, transaction report using Crystal Report, update profile, and logout functionality.",
      "image": "../images/kpop.svg",
      "c": "Website"
    },
    {
      "id": 5,
      "title": "Vorskin",
      "year": 2022,
      "role" : "Front-End Web Developer",
      "tech": "HTML, CSS, JavaScript",
      "url": "https://github.com/tashagrc/VorSkin_Proyek",
      "category": "College Assignment",
      "description": "Vorskin offers an extensive range of skincare products, including cleansers, moisturizers, serums, and masks. All products are sourced from reputable brands committed to using non-toxic ingredients and eco-friendly packaging. Customers can make sustainable choices for their skincare routines without compromising on efficacy or ethics. As a developer in a team of 2, my role revolved around developing the structure, layout, and input validation of the home, login, subscribe, product list, and about us page.",
      "image": "../images/vorskin.svg",
      "c": "Website"
    },
    {
      "id": 6,
      "title": "Eleven E-commerce",
      "year": 2023,
      "role" : "Full Stack Web Developer",
      "tech": "Django, MySQL",
      "url": "https://github.com/tashagrc/ElevenEcommerce",
      "category": "Kominfo Training",
      "description": "Eleven E-commerce offers a curated collection of trendy clothes and allows the user to shop with ease. Users can log in to their existing account, view the product list and product detail, add products to their cart, checkout, and pay for their order seamlessly. As a lead developer in a team of 5, my role revolved around guiding projects, managing development teams, developed product lists, contact, and home functionality.",
      "image": "../images/eleven.svg",
      "c": "Website"
    },
    {
      "id": 7,
      "title": "Educatour",
      "year": 2022,
      "role" : "UI/UX Designer",
      "tech": "Figma",
      "url": "https://www.figma.com/proto/UpDfgvlqy81UzMmnJGwws0/HCI-UAS-2540103055?type=design&node-id=4-11&t=CUY5sLQJIwBuOiXj-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A11&mode=design",
      "category": "College Assignment",
      "description": "Educatour is a cutting-edge mobile application that combines the thrill of travel with the opportunity to expand your knowledge and skills along the way. Whether you are an adventurous globetrotter or a curious learner seeking new experiences, this app is designed to cater to all your travel and educational needs. As an individual UI/UX Designer, my role revolved around designing layouts, color schemes, typography, and iconography to enhance the overall user experience and conducting user research to understand the needs, goals, and preferences of the target audience.",
      "image": "../images/educa.svg",
      "c": "Prototype"
    },
    {
      "id": 8,
      "title": "BINUS Square",
      "year": 2022,
      "role" : "UI/UX Designer",
      "tech": "Figma",
      "url": "https://www.figma.com/proto/FCTHTx2ODu80h1P8gPtc3p/Venn-Prototype?page-id=0%3A1&type=design&node-id=110-2374&viewport=-3202%2C871%2C0.56&scaling=scale-down&starting-point-node-id=110%3A2374",
      "category": "Competition",
      "description": "",
      "image": "../images/binussquare.svg",
      "c": "Prototype"
    }
  ];

  var jsonData = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));

$.getJSON(jsonData, function (data) {
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
        $.getJSON(jsonData, function (data) {
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


