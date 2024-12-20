import mongoose from "mongoose";
import appConfig from "./app/config/app.config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(appConfig.database_url as string)
    app.listen(appConfig.port, () => {
      console.log('App is running on port', appConfig.port)
    })
  } catch (error) {
    console.log(error)
  }
}

main()