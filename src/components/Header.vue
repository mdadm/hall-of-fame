<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <a href="/" class="header__logo-link">Hall Of Fame</a>
      </div>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <a href="#!" class="header__link">Battles</a>
          </li>
          <li class="header__item">
            <a href="#!" class="header__link">Players</a>
          </li>
          <li class="header__item">
            <a href="#!" class="header__link">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

  .header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 24px;
  }

  .header__wrapper {
    max-width: 1060px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .header__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .header__item {
    margin-left: 82px;
  }

  .header__logo-link {
    font-size: 36px;
    line-height: 24px;
    color: white;
    text-decoration: none;
  }

  .header__logo-link:hover, .header__logo-link:focus, .header__logo-link:active {
    opacity: .65;
  }

  .header__link {
    font-size: 18px;
    line-height: 24px;
    color: white;
    text-decoration: none;
  }

  .header__link:hover, .header__link:focus, .header__link:active {
    opacity: .65;
  }
</style>
