<template>
	<main class="main">
	    <div class="main-screen">
	        <h1 class="slogan">В ЄДНОСТІ - СИЛА</h1>
	    </div>
	    <div class="container">
	        <div class="row">
	            <div class="col-md-2 pull-left">
	                <h3 class="head-text">Новини</h3>
	            </div>
	            <div class="col-md-2 pull-right">
	                <button class="btn">Переглянути всі</button>
	            </div>
	        </div>
	        <div class="row">
	            <div class="col-lg-6">
	                <div class="article big">
	                    <img src="src/assets/images/2.png" alt="" />
	                    <div class="text-block">
	                        <h4>В Одесі презентували нову концепцію розвитку е-демократії в Україні.</h4>
	                        <p>У великих містах України за підтримки програми EGAP пройшли відкриті обговорення нової концепції розвитку е-демократії, яку згодом можуть прийняти на державному рівні. Небайдужим одеситам, громадським діячам, представникам місцевої влади та громадським активістам запропонували висловитись з приводу презентованої програми. Захід відвідав й активіст одеської «Самопомочі», юрист Станіслав Драганов.</p>
	                    </div>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-lg-3">
	                    <div class="article">
	                        <img src="src/assets/images/3.png" alt="">
	                    </div>
	                    <div class="article">
	                        <img src="src/assets/images/5.png" alt="">
	                    </div>
	                </div>
	                <div class="col-lg-3">
	                    <div class="article">
	                        <img src="src/assets/images/4.png" alt="">
	                    </div>
	                    <div class="article">
	                        <img src="src/assets/images/6.png" alt="">
	                    </div>
	                </div>
	            </div>

	        </div>
	    </div>
	</main>
</template>


<style>
	.main-screen {
	    background: url('../../assets/images/main-screen.png') no-repeat;
	    background-size: cover;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    height: 450px;
	    margin-bottom: 27px;
	}
	.slogan {
	    color: #fff;
	    text-transform: uppercase;
	    text-align: center;
	    font-family: 'DINPro';
	}
	.slogan:hover {
	    border-bottom: none;
	}
</style>