/**
 * File options
 * Options which relate to filesystem storage of assets
 */
module.exports.files = {
  // Maximum allowed file size in bytes
  // Defaults to 500MB
  maxBytes: 524288000,
  // The fs directory name at which files will be kept
  // dirname: Dynamically setting dirname in AssetController.js on create func
  saveAs: function (__newFileStream, next) { return next(undefined, __newFileStream.filename); },
  adapter: require('skipper-s3'),
  key: process.env.S3_API_KEY,
  secret: process.env.S3_API_SECRET,
  bucket: process.env.S3_BUCKET,
  region: process.env.S3_REGION || undefined,
  endpoint: process.env.S3_ENDPOINT || undefined,
  token: process.env.S3_TOKEN || undefined
};
