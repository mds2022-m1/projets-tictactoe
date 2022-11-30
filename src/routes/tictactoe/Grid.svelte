<main>
    <section id="jeu">
      <div data-index="0" class="case"></div>
      <div data-index="1" class="case"></div>
      <div data-index="2" class="case"></div>
      <div data-index="3" class="case"></div>
      <div data-index="4" class="case"></div>
      <div data-index="5" class="case"></div>
      <div data-index="6" class="case"></div>
      <div data-index="7" class="case"></div>
      <div data-index="8" class="case"></div>
  </section>
</main>

<style>
  #jeu{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 500px;
    margin: auto;
}

.case{
    border: 4px solid black;
    height: 150px;
    line-height: 100px;
    font-size: 60px;
}
</style>
