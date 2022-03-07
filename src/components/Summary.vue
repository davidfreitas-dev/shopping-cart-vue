<template>
    <div class="summary">
        <div class="summary-items">
            <span class="title">Summary</span>
            <div class="item">
              <p>Processor Intel</p>
              <span>$300.00</span>
            </div>
            <div class="item">
              <p>AMD Processor</p>
              <span>$200.00</span>
            </div>
            <div class="item">
              <p>Motherboard</p>
              <span>$600.00</span>
            </div>
            <div class="item">
              <p>SSD Corsair</p>
              <span>$150.00</span>
            </div>
        </div>
        <div class="summary-actions">
            <button>Finish</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin: 1rem .5rem;
  padding: 1.3rem;
  border: 1px solid #c3c3c3;
}

.summary-items .title {
  font-size: 1.5rem;
  font-weight: 700;
}

.summary-items .item {
  display: flex;
  justify-content: space-between;
  margin-top: .75rem;
  margin-bottom: 0;
  border-bottom: 1px solid #c3c3c3;
}

.item span {
  font-size: 1.1rem;
  font-weight: 600;
}

.summary-actions button {
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: .05rem;
  text-transform: uppercase;
  width: 100%;
  padding: .85rem 0;
  margin-top: 1rem;
  background-color: var(--main);
  cursor: pointer;
}

.summary-actions button:hover {
  background-color: #eb6550;
}

@media only screen and (min-width: 768px) {
  .summary {
    width: 40%;
    margin: 0 .5rem;
  }

  .summary-actions button {
    margin-top: 0;
  }
}
</style>