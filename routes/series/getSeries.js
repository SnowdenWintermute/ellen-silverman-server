const Series = require('../../models/series')

exports.getSeries = async (req, res) => {
  try {
    const series = await Series.find({ slug: req.params.seriesSlug })
    return res.json(series)
  } catch (error) {
    console.log(error)
    return res.json(JSON.stringify(error))
  }
}
