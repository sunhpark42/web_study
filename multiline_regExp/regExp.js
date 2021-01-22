string = `<?xml version=1.0 .....
klpㅇdfadfad
block
<?xml version=1.0 .....
hello
block
<?xml version=1.0 .....
bye
block
<?xml version=1.0 .....
yeah
block`

array = string.match(/\<\?xml version=1.0[\s\S\r]*?block/g)

array.forEach((arr) => {
  console.log(arr)
})