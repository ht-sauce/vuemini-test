<script lang="jsx">
export default {
  name: 'HelloWorld',
  setup() {

    return () => (
      <div className="tit">
        这是helloword组件中的，产生了警告
        <ion-a />
      </div>
    )
  }
}
</script>
<style>
.tit {
  color: red;
}
</style>
