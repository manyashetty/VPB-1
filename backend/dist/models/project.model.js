"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    image_url: String,
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
});
const ProjectModel = (0, mongoose_1.model)('Project', ProjectSchema);
exports.default = ProjectModel;
