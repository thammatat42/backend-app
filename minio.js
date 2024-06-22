const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "minio",
  secretAccessKey: "minio123",
  endpoint: "http://103.114.200.25:9000/",
  s3ForcePathStyle: true, // needed with minio?
  signatureVersion: "v4",
});

// putObject operation.
s3.putObject(
  {
    Bucket: "money-story-bucket",
    Key: "testobject",
    Body: "Hello from MinIO!!",
  },
  (err, data) => {
    if (err) console.log(err);
    else
      console.log(
        "Successfully uploaded data to money-story-bucket/testobject"
      );
  }
);

// getObject operation.
const file = require("fs").createWriteStream("/tmp/mykey");
s3.getObject({ Bucket: "money-story-bucket", Key: "testobject" })
  .on("httpData", (chunk) => file.write(chunk))
  .on("httpDone", () => file.end())
  .send();
