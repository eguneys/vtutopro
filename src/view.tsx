const App = tuto => () => {
  return (<vtutopro>
    <boxes>
      <For each={tuto.boxes}>{ box =>
			  <Box tuto={tuto} box={box}/>
			}</For>
	 </boxes>
	</vtutopro>)
}

const Box = props => {

  const style = () => ({
   transform: `translate(${props.box.pos.x}px, ${props.box.pos.y}px)`
	 })

  return (<box style={style()}>
     {props.box.name}
     <Show when={props.box.args.length}>
     (
      <For each={props.box.args}>{arg =>
			(<DynamicTag atom={arg}/>)
			}</For>
		 )
		 </Show>
		 </box>)
}

const DynamicTag = props => {
	return (<Show when={props.atom.editing}
			fallback={
			<span class="name" onClick={_ => props.atom.editing = props.atom.allow_edit}>{props.atom.name}</span>
			}>
			<FocusInput onKeyUp={(_, value) => props.atom.editing_name(_.keyCode, value) }/>
			</Show>)
}

const FocusInput = (props) => {
let $ref
  onMount(() => {

$ref.focus()
      })
  return (<input ref={$ref} type="text" onKeyUp={_ => props.onKeyUp(_, $ref.value)}/>)
}


export default App
