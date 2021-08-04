require('dotenv').config();
const referencesServices = require('../services/references.service');
var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const knex = require('../database/db');


//NOTE: The main error handling for invalid queries, params, etc... is handled here in the controller

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

//handles the /references/mobility_issues endpoint
router.get('/mobility_issues',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findMobilityIssuesReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/plans_to_work endpoint
router.get('/plans_to_work',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findPlansToWorkReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/property endpoint
router.get('/property',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findPropertyReferences()
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

//handles the /references/retirement endpoint
router.get('/retirement',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findRetirementReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/return_to_australia endpoint
router.get('/return_to_australia',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findReturnToAustraliaReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/saved_for_retirement endpoint
router.get('/saved_for_retirement',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findSavedForRetirementReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/single_or_couple endpoint
router.get('/single_or_couple',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findSingleOrCoupleReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/super endpoint
router.get('/super',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findSuperReferences()
        res.status(200)
        res.send(references)
    }
    catch(error){
        res.status(error.status || 500)
        res.send({ error: true, message: error.message })
    }
})

//handles the /references/when_retire endpoint
router.get('/when_retire',async(req,res) => {
    let references;
    try {
        references = await referencesServices.findWhenRetireReferences()
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
    const age = req.body.age
    const gender = req.body.gender
    const relationshipstatus = req.body.relationshipstatus
    const nearretirement = req.body.nearretirement
    const planstowork = req.body.planstowork
    const includestats = req.body.includestats
    const medicalmobilityissues = req.body.medicalmobilityissues
    const costofliving = req.body.costofliving
    const healthcarequality = req.body.healthcarequality
    const locationproximity = req.body.locationproximity
    const lifestyleculture = req.body.lifestyleculture
    const accesstogoodquality = req.body.accesstogoodquality
    const socialconnection = req.body.socialconnection
    const safety = req.body.safety
    const accesstotranslation = req.body.accesstotranslation
    const accesstoconcierge = req.body.accesstoconcierge
    const goodtransport = req.body.goodtransport
    const closetobeach = req.body.closetobeach
    const natureandtranquility = req.body.natureandtranquility
    const lgbt = req.body.lgbt
    const otherinfluences = req.body.otherinfluences
    const languageandcultural = req.body.languageandcultural
    const toocomplicated = req.body.toocomplicated
    const howmuchmoney = req.body.howmuchmoney
    const standardofservices = req.body.standardofservices
    const qualityofhealthcare = req.body.qualityofhealthcare
    const notfamiliar = req.body.notfamiliar
    const impactentitlements = req.body.impactentitlements
    const notabletoseefamily = req.body.notabletoseefamily
    const notknowinghelp = req.body.notknowinghelp
    const personalsafety = req.body.personalsafety
    const otherbarriers = req.body.otherbarriers
    const managedbarriers = req.body.managedbarriers
    const levelassistance = req.body.levelassistance
    const perfectday = req.body.perfectday
    const savedforretirement = req.body.savedforretirement
    const howmuchissuper = req.body.howmuchissuper
    const superfund = req.body.superfund
    const ownproperty = req.body.ownproperty
    const additionalcontributions = req.body.additionalcontributions
    const setupretirementaccount = req.body.setupretirementaccount
    const investigatingpostretirement = req.body.investigatingpostretirement
    const necessarylargeexpensiveitems = req.body.necessarylargeexpensiveitems
    const clearingcurrentdebt = req.body.clearingcurrentdebt
    const generateotherformsincome = req.body.generateotherformsincome
    const gettinginsurance = req.body.gettinginsurance
    const strongcirclefriends = req.body.strongcirclefriends
    const getfinancialadvice = req.body.getfinancialadvice
    const haventtakensteps = req.body.haventtakensteps
    const otherincome = req.body.otherincome
    const goodincometowardsretirement = req.body.goodincometowardsretirement
    const returntoaustralia = req.body.returntoaustralia
    const lengthabroad = req.body.lengthabroad
    const whenretire = req.body.whenretire
    const singleorcouple = req.body.singleorcouple
    if(!req.body){
        res.status(400).json({
          error: true,
          message: "Request body incomplete"
        })
        return
      }

    return knex("answers").insert({ 
        name: name, 
        age: age,
        gender: gender,
        relationshipstatus: relationshipstatus,
        nearretirement: nearretirement,
        planstowork: planstowork,
        includestats: includestats,
        medicalmobilityissues: medicalmobilityissues,
        costofliving: costofliving,
        healthcarequality: healthcarequality,
        locationproximity: locationproximity,
        lifestyleculture: lifestyleculture,
        accesstogoodquality: accesstogoodquality,
        socialconnection: socialconnection,
        safety: safety,
        accesstotranslation: accesstotranslation,
        accesstoconcierge: accesstoconcierge,
        goodtransport: goodtransport,
        closetobeach: closetobeach,
        natureandtranquility: natureandtranquility,
        lgbt: lgbt,
        otherinfluences: otherinfluences,
        languageandcultural: languageandcultural,
        toocomplicated: toocomplicated,
        howmuchmoney: howmuchmoney,
        standardofservices: standardofservices,
        qualityofhealthcare: qualityofhealthcare,
        notfamiliar: notfamiliar,
        impactentitlements: impactentitlements,
        notabletoseefamily: notabletoseefamily,
        notknowinghelp: notknowinghelp,
        personalsafety: personalsafety,
        otherbarriers: otherbarriers,
        managedbarriers: managedbarriers,
        levelassistance: levelassistance,
        perfectday: perfectday,
        savedforretirement: savedforretirement,
        howmuchissuper: howmuchissuper,
        superfund: superfund,
        ownproperty: ownproperty,
        additionalcontributions: additionalcontributions,
        setupretirementaccount: setupretirementaccount,
        investigatingpostretirement: investigatingpostretirement,
        necessarylargeexpensiveitems: necessarylargeexpensiveitems,
        clearingcurrentdebt: clearingcurrentdebt,
        generateotherformsincome: generateotherformsincome,
        gettinginsurance: gettinginsurance,
        strongcirclefriends: strongcirclefriends,
        getfinancialadvice: getfinancialadvice,
        haventtakensteps: haventtakensteps,
        otherincome: otherincome,
        goodincometowardsretirement: goodincometowardsretirement,
        returntoaustralia: returntoaustralia,
        lengthabroad: lengthabroad,
        whenretire: whenretire,
        singleorcouple: singleorcouple
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