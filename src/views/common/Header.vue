<template>
	<header class="main-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="logo-box">
                    <a href="javascript:void(0)" class="logo"><img src="src/assets/images/logo.svg" alt="" /></a>
                    <span>Одеса</span>
                </div>
            </div>
            <div class="col-lg-6">
                <nav class="menu">
                    <ul>
                    	<li v-for="page in items">
							<router-link :to="{ path: page.path }">
								{{ page.name }}
							</router-link>
						</li>
                    </ul>
                </nav>
            </div>
            <div class="col-lg-3">
                <button class="toggle-mnu">
                <span class="sandwich">
                    <span class="sw-topper"></span>
                    <span class="sw-bottom"></span>
                    <span class="sw-footer"></span>
                </span>
                </button>
                <div class="search-block">
                    <div class="search-box">
                        <input type="text" class="search-input"/><span><i class="glyphicon glyphicon-search"></i></span>
                    </div>
                    <button class="btn btn-support">підтримати</button>
                </div>
            </div>
        </div>




        <!--<ul class="social">-->
            <!--<li><a href="https://www.facebook.com" target="blank">-->

            <!--</a></li>-->
            <!--<li><a href="https://twitter.com" target="blank">-->

            <!--</li>-->
            <!--<li><a href="https://www.linkedin.com" target="blank">-->

            <!--</li>-->
        <!--</ul>-->
    </div>
</header>
</template>


<script>
	export default {
		data() {
			return {
				items: [
					{
						path: '/',
						name: 'Головна',
					},
					{
						path: '/News',
						name: 'Новини'
					},
					{
						path: '/',
						name: 'Проекти'
					},
					{
						path: '/',
						name: 'Осередки'
					},
					{
						path: '/',
						name: 'Програма'
					},
					{
						path: '/Contacts',
						name: 'Контакти'
					}
				]
			}
		}
	}
</script>

<style>
	.main-header {
    padding: 22px 0 5px;
}
.logo-box {
    width: 153px;
}
.logo {
    display: block;
}
.logo+span {
    float: right;
    font-family: 'DINPro';
    font-size: 15px;
    line-height: 1.4;
    text-align: right;
    color: #848484;
}
.menu ul {
    display: flex;
    justify-content: space-around;
    max-width: 547px;
    margin-top: 17px;
}
.menu ul a {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
}
/*sandwich*/
.toggle-mnu {
    width: 60px;
    height: 50px;
    position: absolute;
    z-index: 100;
    border: none;
    right: 12px;
    top: 20px;
    outline: none;
    display: none;
    border-radius: 5px;
    background: transparent;
}
.toggle-mnu span {
    display: block;
}
.sandwich {
    width: 14px;
    height: 14px;
    position: absolute;
    top: -25px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 200;
}
.sw-topper {
    position: relative;
    top: 2px;
    width: 28px;
    height: 3px;
    background: #fff;
    border: none;
    border-radius: 4px 4px 4px 4px;
    -webkit-transition: -webkit-transform 0.5s, top 0.2s;
    transition: transform 0.5s, top 0.2s;
    display: block;
}
.sw-bottom {
    position: relative;
    width: 28px;
    height: 3px;
    top: 8.6px;
    background: #fff;
    border: none;
    border-radius: 4px 4px 4px 4px;
    -webkit-transition: -webkit-transform 0.5s, top 0.2s;
    transition: transform 0.5s, top 0.2s;
    -webkit-transition-delay: 0.2s, 0s;
    transition-delay: 0.2s, 0s; }

.sw-footer {
    position: relative;
    width: 28px;
    height: 3px;
    top: 15px;
    background: #fff;
    border: none;
    border-radius: 4px 4px 4px 4px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s; }

.sandwich.active .sw-topper {
    top: 9px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg); }
.sandwich.active .sw-bottom {
    top: 6px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg); }
.sandwich.active .sw-footer {
    opacity: 0;
    top: 0;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg); }

.search-block {
    display: flex;
}
.search-box {
    display: flex;
    align-items: center;
    margin-top: 14px;
}
.search-box span {
    font-size: 17px;
}
.search-input {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    width: 80px;
}
.btn-support {
    margin-left: 29px;
    margin-top: 4px;
    padding: 0 14px;
    font-size: 16px;
}
</style>