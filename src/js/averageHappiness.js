import moment from 'moment'

module.exports = {
  attach
}

function attach(data) {

  // const dim = setDimensions()
  // setTime(data)

  console.log(data)

  // const scales = setScales(data, dim)

  // let path = definePath(data, scales)
  // let g = createContainers(dim)

  // drawAxes(dim, scales)
  // drawPath(data, g, path, dim.margin)
}

function setDimensions () {
  const margin = {top: 8, right: 40, bottom: 24, left: 60}
  const width = parseInt(d3.select('svg').style('width'))
  const height = parseInt(d3.select('svg').style('height'))
  return { width, height, margin }
}

function setTime (data) {
  const parseTime = d3.timeParse('%Y-%m-%d %H:%M:%S')

  data.forEach((row) => { // Parse all times into d3 land
    row.date = parseTime(moment(row.day).format('YYYY-MM-DD HH:mm:ss'))
    row.mood = Math.round(parseFloat(row.avg))
  })
}

function setScales (data, dim) {
  return {
    xScale: setScaleX(data, dim),
    yScale: setScaleY(data, dim)
  }
}

function setScaleX (data, dim) {
  return d3.scaleTime() // Define x scale
      .range([0, (dim.width - dim.margin.left - dim.margin.right)])
      .domain(d3.extent(data, (d) => d.date))
}


function setScaleY (data, dim) {
  return d3.scaleLinear() // Define y scale
    .range([(dim.height - dim.margin.bottom - dim.margin.top), 0])
    .domain([1, 5])
}

function definePath (data, { xScale, yScale }) {
  return d3.line() // Define graph curve for the data
    .curve(d3.curveBasis)
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.mood))
}

function createContainers ({ width, height, margin}) {
  let svg = d3.select('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)

  createClipPath(svg, width, height, margin)
  return createG(svg, width, height, margin)
}

function createClipPath (svg, width, height, margin) {
  svg.append('clipPath')
    .attr('id', 'clipPath')
      .append('svg:rect')
      .attr('width', (width -margin.right - margin.left))
      .attr('height', (height - margin.bottom - margin.top))
}


function createG (svg, width, height, margin) {
  return svg.append('g')
    .attr("width", (width - margin.left - margin.right))
    .attr("height", (height - margin.bottom - margin.top))
    .attr('transform', 'translate(' + margin.left + ',' + margin.top  + ')')
    .attr('clip-path', 'url(#clipPath)')
}

function drawAxes({ height, width, margin }, { xScale, yScale }) {
  drawYAxis(width, margin, yScale)
  drawXAxis(height, margin, xScale)
}


function drawXAxis (height, margin, xScale) {
  d3.select('svg')
    .append('g')
      .attr("transform", "translate(" + margin.left + "," + (height - margin.bottom) + ")")
      .attr('class', 'axisLabel bottomAxis')
      .call(d3.axisBottom(xScale)
        .ticks(d3.timeDay.every(1))
      )
}


function drawYAxis (width, margin, yScale) {
  d3.select('svg')
    .append('g')
      .attr('class', 'axisLabel leftAxis grid')
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
      .call(d3.axisLeft(yScale)
        .ticks(5)
      )
}

function drawPath (data, g, path) {
  g.append('path') // Draw line for that curve
    .data([data])
    .attr('id', 'moodPath')
    .attr('d', path)
}

