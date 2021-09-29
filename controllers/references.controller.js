require('dotenv').config();
const referencesServices = require('../services/references.service');
var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const knex = require('../database/db');


//NOTE: The main error handling for invalid queries, params, etc... is handled here in the controller

//handles the /references/age endpoint
router.get('/age',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findAgeReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/gender endpoint
router.get('/gender',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findGenderReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/relationship_status endpoint
router.get('/relationship_status',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findRelationshipStatusReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/location_preferences endpoint
router.get('/location_preferences',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findLocationPreferencesReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/living_abroad endpoint
router.get('/living_abroad',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findLivingAbroadReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/likely_to_try endpoint
router.get('/likely_to_try',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findLikelyToTryReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})    

//handles the /references/level_assistance endpoint
router.get('/level_assistance',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findLevelAssistanceReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})
    
//handles the /references/your_retirement endpoint
router.get('/your_retirement',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findYourRetirementReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the references/answers endpoint
router.post("/answers",function(req,res,next){
    const name = req.body.name
    const destination1 = req.body.destination1
    const destination2 = req.body.destination2
    const destination3 = req.body.destination3
    const age = req.body.age
    const gender = req.body.gender
    const relationshipStatus = req.body.relationshipStatus
    const costOfLiving = req.body.costOfLiving
    const healthCareQuality = req.body.healthCareQuality
    const locationProximity = req.body.locationProximity
    const lifestyleCulture = req.body.lifestyleCulture
    const accessToGoodQuality = req.body.accessToGoodQuality
    const accessToExPats = req.body.accessToExPats
    const safety = req.body.safety
    const goodTransport = req.body.goodTransport
    const accessToBenefits = req.body.accessToBenefits
    const warmerClimate = req.body.warmerClimate
    const coolerClimate = req.body.coolerClimate
    const englishSpeaking = req.body.englishSpeaking
    const closeToBeach = req.body.closeToBeach
    const natureAndTranquility = req.body.natureAndTranquility
    const lgbtqFriendly = req.body.lgbtqFriendly
    const volunteeringOpportunities = req.body.volunteeringOpportunities
    const otherPreferences = req.body.otherPreferences
    const perfectDay = req.body.perfectDay
    const lengthAbroad = req.body.lengthAbroad
    const livingAbroad = req.body.livingAbroad
    const levelAssistance = req.body.levelAssistance
    const growingPension = req.body.growingPension
    const generateAdditionalIncome = req.body.generateAdditionalIncome
    const receivingSteadyIncome = req.body.receivingSteadyIncome
    const clearingDebt = req.body.clearingDebt
    const settingUpInsurance = req.body.settingUpInsurance
    const postRetirementOptions = req.body.postRetirementOptions
    const connectingWithCommunity = req.body.connectingWithCommunity
    const physicallyActive = req.body.physicallyActive
    const homeAdaptations = req.body.homeAdaptations
    const otherRetirement = req.body.otherRetirement
    if(!req.body){
        res.status(400).json({
          error: true,
          message: "Request body incomplete"
        })
        return
      }

    return knex("answers").insert({ 
        name: name, 
        destination1: destination1, 
        destination2: destination2,
        destination3: destination3,
        age: age,
        gender: gender,
        relationshipStatus: relationshipStatus,
        costOfLiving: costOfLiving,
        healthCareQuality: healthCareQuality,
        locationProximity: locationProximity,
        lifestyleCulture: lifestyleCulture,
        accessToGoodQuality: accessToGoodQuality,
        accessToExPats: accessToExPats,
        safety: safety,
        goodTransport: goodTransport,
        accessToBenefits: accessToBenefits,
        warmerClimate: warmerClimate,
        coolerClimate: coolerClimate,
        englishSpeaking: englishSpeaking,
        closeToBeach: closeToBeach,
        natureAndTranquility: natureAndTranquility,
        lgbtqFriendly: lgbtqFriendly,
        volunteeringOpportunities: volunteeringOpportunities,
        otherPreferences: otherPreferences,
        perfectDay: perfectDay,
        lengthAbroad: lengthAbroad,
        livingAbroad: livingAbroad,
        levelAssistance: levelAssistance,
        growingPension: growingPension,
        generateAdditionalIncome: generateAdditionalIncome,
        receivingSteadyIncome: receivingSteadyIncome,
        clearingDebt: clearingDebt,
        settingUpInsurance: settingUpInsurance,
        postRetirementOptions: postRetirementOptions,
        connectingWithCommunity: connectingWithCommunity,
        physicallyActive: physicallyActive,
        homeAdaptations: homeAdaptations,
        otherRetirement: otherRetirement
    })
    .then(() => {
        res.status(201).json({
          success: true,
          message: "Successfully inserted data"
        })
        return;
      })
      .catch((error) => {
          console.log(error.status)
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
      })
})
module.exports=router;