import mongoose, { Schema, model, models } from "mongoose";

const propertyShema = new Schema({
  bath: String,
  bed: String,
  caution: String,
  city: String,
  contenu: String,
  description: String,
  location: String,
  parking: String,
  price: String,
  square: String,
  titre: String,
});

const Offert = models.offerts || model("offerts", propertyShema);

export default Offert;
