<template>
  <header>
		<div class="nav-header">
			<nav>
				<div class="brand">
					<h2>Shopname</h2>
				</div>
				<div>
					<ul class="nav-list">
						<li class="nav-item">
							<a href="#" class="nav-link">Home</a>
							<a href="#" class="nav-link">Products</a>
							<a href="#" class="nav-link">Promos</a>
							<a href="#" class="nav-link">About</a>
							<a href="#" class="nav-link">Contact</a>
						</li>
					</ul>
				</div>
				<div class="cart">
					<a href="cart.html"><span class="ti-shopping-cart"></span></a>
					<span class="cart-count"><span class="text-main">10</span></span>					
				</div>			
			</nav>
		</div>
	</header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 10;
    background: #fff;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
  }

  .nav-header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 9px -7px rgba(0,0,0,0.25);
  }

  .brand {
    font-weight: 700;
  }

  .nav-list {
    display: none;
  }

  .nav-link {
    color: var(--dark);
    padding: 0 .5rem;
    font-size: .85rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .nav-link:hover {
    color: var(--main);
  }

  .cart {
    display: flex;
    justify-content: center;
  }

  .cart a span {
    color: var(--dark);
    font-size: 1.7rem;
  }

  .cart-count {
    display: flex;
  }

  .cart-count span {
    padding: 0 3px;
    border-radius: 100%;
    color: #fff !important;
    background-color: var(--main);
    font-size: .7rem !important;
    font-weight: bold;
    align-self: flex-start;
  }

  @media only screen and (min-width: 768px) {
    .header {
      position: relative;
      left: 0;
      top: 10;
    }

    nav {
      width: 100%;
    }

    .nav-list {
      display: block;
    }
  }

  @media only screen and (min-width: 960px) {	
    nav {
      width: 95%;
    }
  }

  @media only screen and (min-width: 1124px) {
    nav {
      width: 80%;
    }
  }
</style>