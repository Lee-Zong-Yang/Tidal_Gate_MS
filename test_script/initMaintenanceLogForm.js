const { IoTThingsGraph } = require('aws-sdk');
const mongoose = require('mongoose');

const { zero,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelfth,
    thirteenth } = require('../app_api/models/CONSTANT');

    const {
        baseQuestionSchema } = require('../app_api/models/form');
    
    const {
        maintenanceLogSchema } = require('../app_api/models/gateAndLogs');    

mongoose.connect('mongodb://localhost/fyp', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    var docArray = mongoose.model('BaseQuestion', baseQuestionSchema);
    var TextboxQuestion = docArray.discriminator('textbox', new mongoose.Schema({}, { _id: false }));
    var DropdownQuestion = docArray.discriminator('dropdown', new mongoose.Schema({
        options: []
    }, { _id: false }));
    var DateQuestion = docArray.discriminator('date', new mongoose.Schema({
        value: { type: Date }
    }, { _id: false }));
    var CategoryLabel = docArray.discriminator('groupLabel', new mongoose.Schema({}, { _id: false }));
    let CheckBoxQuestion = docArray.discriminator('checkbox', new mongoose.Schema({ checkboxes: [] }, { _id: false }));
    var RTXQuestion = docArray.discriminator('RTX', new mongoose.Schema({
        value: {}
    }, { _id: false }));

    var form = db.model('form', maintenanceLogSchema);

    // Create a new batch of events with different kinds
    var batch = {
        schemaOf: 'maintenanceLogForm',
        gateInfo: new CategoryLabel({
            key: 'gateInfo',
            label: '0.0 GATE INFORMATION',
            value: '',
            required: false,
            order: zero
        }),
        gateName: new DropdownQuestion({
            key: 'gateName',
            label: 'Gate Name',
            options: [],
            required: true,
            order: zero
        }),
        date: new DateQuestion({
            key: 'date',
            label: 'Maintenance Date',
            required: true,
            order: zero
        }),
        powerSupply415: new CategoryLabel({
            key: 'powerSupply415',
            label: 'TESTING 1.0 : POWER SUPPLY (415Vac, 3 Phase) TESTING',
            required: false,
            order: first
        }),
        redBlueTest: new TextboxQuestion({
            key: 'redBlueTest',
            label: 'Red / Blue Phases Supply Voltage Testing',
            value: '',
            required: false,
            order: first
        }),
        redYellowTest: new TextboxQuestion({
            key: 'redYellowTest',
            label: 'Red / Yellow Phases Supply Voltage Testing',
            value: '',
            required: false,
            order: first
        }),
        yellowBlueTest: new TextboxQuestion({
            key: 'yellowBlueTest',
            label: 'Yellow / Blue Phases Supply Voltage Testing',
            value: '',
            required: false,
            order: first
        }),
        rCCBReclose: new DropdownQuestion({
            key: 'rCCBReclose',
            label: 'RCCB auto re-close function verification.',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: first
        }),
        rCCBFunc: new DropdownQuestion({
            key: 'rCCBFunc',
            label: 'RCCB function verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: first
        }),
        powerSupply240: new CategoryLabel({
            key: 'powerSupply240',
            label: 'TESTING 1.1 : POWER SUPPLY (240Vac, 1 Phase) TESTING',
            required: false,
            order: second
        }),
        redNeutral: new TextboxQuestion({
            key: 'redNeutral',
            label: 'Red / Neutral Phases Supply Voltage Testing',
            value: '',
            required: false,
            order: second
        }),
        yellowNeutral: new TextboxQuestion({
            key: 'yellowNeutral',
            label: 'Yellow / Neutral Phases Supply Voltage Testing',
            value: '',
            required: false,
            order: second
        }),
        blueNeutral: new TextboxQuestion({
            key: 'blueNeutral',
            label: 'Blue / Neutral Phases Supply Voltage Testing',
            value: '',
            required: false,
            order: second
        }),
        powerSupply24: new TextboxQuestion({
            key: 'powerSupply24',
            label: 'Power Supply 240Vac/24Vdc reading',
            value: '',
            required: false,
            order: second
        }),
        pwrSupply5: new TextboxQuestion({
            key: 'Power Supply 240Vdc/5Vdc reading',
            label: 'Power Supply 240Vdc/5Vdc reading',
            value: '',
            required: false,
            order: second
        }),
        solarPwrLbl: new CategoryLabel({
            key: 'solarPwrLbl',
            label: 'TESTING 1.2 : SOLAR POWER SUPPLY & SOLAR POWER CHARGING TESTING',
            required: false,
            order: third
        }),
        solarPwrTest: new DropdownQuestion({
            key: 'solarPwrTest',
            label: 'Solar Main Power Supply Voltage Testing',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: third
        }),
        solarPwrTestVal: new TextboxQuestion({
            key: 'solarPwrTestVal',
            label: 'Solar Main Power Supply Voltage Testing Value',
            value: '',
            required: false,
            order: third
        }),
        solarPwrAmpTest: new DropdownQuestion({
            key: 'solarPwrAmpTest',
            label: 'Solar Power Charging Ampere and Voltage Testing',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: third
        }),
        solarPwrAmpTestVal: new TextboxQuestion({
            key: 'solarPwrAmpTestVal',
            label: 'Solar Power Charging Ampere and Voltage Testing Value',
            value: '',
            required: false,
            order: third
        }),
        secondPwr: new CategoryLabel({
            key: 'secondPwr',
            label: 'TESTING 2.0 : SECONDARY POWER BACK UP',
            required: false,
            order: fourth
        }),
        uPSBack: new DropdownQuestion({
            key: 'uPSBack',
            label: 'UPS Backup Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fourth
        }),
        pwrResume: new DropdownQuestion({
            key: 'pwrResume',
            label: 'Power resume after power down.',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fourth
        }),
        uPSBackTime: new DropdownQuestion({
            key: 'uPSBackTime',
            label: 'UPS Backup Time Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fourth
        }),
        durationBack: new TextboxQuestion({
            key: 'durationBack',
            label: 'State the duration of the Backup Time',
            value: '',
            required: false,
            order: fourth
        }),
        gateOper: new CategoryLabel({
            key: 'gateOper',
            label: 'TESTING 3.0 : GATE OPERATIONAL (MANUAL, AUTO, REMOTE AND EMERGENCY STOP)',
            required: false,
            order: fifth
        }),
        actuatorOpen: new DropdownQuestion({
            key: 'actuatorOpen',
            label: 'Actuator Fully Open Signal Test',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fifth
        }),
        actuatorClose: new DropdownQuestion({
            key: 'actuatorClose',
            label: 'Actuator Fully Closed Signal Test',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fifth
        }),
        gateManual: new DropdownQuestion({
            key: 'gateManual',
            label: 'Gate Manual Control Test',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fifth
        }),
        gateAuto: new DropdownQuestion({
            key: 'gateAuto',
            label: 'Gate Auto Control Test',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fifth
        }),
        emergency: new DropdownQuestion({
            key: 'emergency',
            label: 'Emergency Stop the Operation',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: fifth
        }),
        waterLvl: new CategoryLabel({
            key: 'waterLvl',
            label: 'TESTING 4.0 : WATER LEVEL AND SENSOR CALIBRATION',
            required: false,
            order: sixth
        }),
        upWaterLvl: new TextboxQuestion({
            key: 'upWaterLvl',
            label: 'Upstream Water Level Measurement',
            value: '',
            required: false,
            order: sixth
        }),
        downWaterLvl: new TextboxQuestion({
            key: 'downWaterLvl',
            label: 'Downstream Water Level Measurement',
            value: '',
            required: false,
            order: sixth
        }),
        veriUpRead: new DropdownQuestion({
            key: 'veriUpRead',
            label: 'Verify Upstream Sensor Reading is same as Real Water Level',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: sixth
        }),
        veriDownRead: new DropdownQuestion({
            key: 'veriDownRead',
            label: 'Verify Downstream Sensor Reading is same as Real Water Level',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: sixth
        }),
        touch: new CategoryLabel({
            key: 'touch',
            label: 'TESTING 5.0 : TOUCH SCREEN VERIFICATION',
            required: false,
            order: seventh
        }),
        userLog: new DropdownQuestion({
            key: 'userLog',
            label: 'Different Level User Login Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: seventh
        }),
        btnVeri: new DropdownQuestion({
            key: 'btnVeri',
            label: 'Button Function Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: seventh
        }),
        gateInfoVeri: new DropdownQuestion({
            key: 'gateInfoVeri',
            label: 'Gate Info Page Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: seventh
        }),
        sysEmerAlert: new CategoryLabel({
            key: 'sysEmerAlert',
            label: 'TESTING 6.0 : SYSTEM EMERGENCY ALERT AND INFO REQUEST VERIFICATION',
            required: false,
            order: eighth
        }),
        locEmerAlert: new DropdownQuestion({
            key: 'locEmerAlert',
            label: 'Local Emergency Alert System Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: eighth
        }),
        emerSMSAlert: new DropdownQuestion({
            key: 'emerSMSAlert',
            label: 'Emergency SMS Alert Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: eighth
        }),
        gateInfoReq: new DropdownQuestion({
            key: 'gateInfoReq',
            label: 'Gate Info Request Center',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: eighth
        }),
        gateInfoReqText: new TextboxQuestion({
            key: 'gateInfoReqText',
            label: 'Gate Info Request Center:',
            value: '',
            required: false,
            order: eighth
        }),
        actuatorFunc: new CategoryLabel({
            key: 'actuatorFunc',
            label: 'TESTING 7.0 : ACTUATOR FUNCTION VERIFICATION',
            required: false,
            order: ninth
        }),
        actuatorLocRem: new DropdownQuestion({
            key: 'actuatorLocRem',
            label: 'Actuator Local/Remote Signal Test',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: ninth
        }),
        gateLoc: new DropdownQuestion({
            key: 'gateLoc',
            label: 'Gate Local (Actuator) Control Test',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: ninth
        }),
        rep9VBattery: new DropdownQuestion({
            key: 'rep9VBattery',
            label: 'Replace 9V Battery for Rotork Actuator',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: ninth
        }),
        no9VBattery: new TextboxQuestion({
            key: 'no9VBattery',
            label: 'State the number of 9V batteries replaced:',
            value: '',
            required: false,
            order: ninth
        }),
        floodSurv: new CategoryLabel({
            key: 'floodSurv',
            label: 'TESTING 8.0 : FLOOD SURVEILLANCE VERIFICATION',
            required: false,
            order: tenth
        }),
        PTZCam: new DropdownQuestion({
            key: 'PTZCam',
            label: 'PTZ Camera Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: tenth
        }),
        PTZCamFunc: new DropdownQuestion({
            key: 'PTZCamFunc',
            label: 'PTZ Camera Verification',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: tenth
        }),
        rainGauge: new CategoryLabel({
            key: 'rainGauge',
            label: 'TESTING 9.0 RAIN GAUGE FUNCTION VERIFICATION',
            required: false,
            order: eleventh
        }),
        rainGaugeFunc: new DropdownQuestion({
            key: 'rainGaugeFunc',
            label: 'Rain gauge functioning test. Due to the collected 0.5mm rainwater.',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: eleventh
        }),
        ctrlPan: new CategoryLabel({
            key: 'ctrlPan',
            label: 'TESTING 10.0 CONTROL PANEL CLEANING AND COMPONENTS MAINTENANCE',
            required: false,
            order: twelfth
        }),
        ctrlPanClean: new DropdownQuestion({
            key: 'ctrlPanClean',
            label: 'Control Panel Cleaning ',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: twelfth
        }),
        ctrlPanMain: new DropdownQuestion({
            key: 'ctrlPanMain',
            label: 'Control Panel Maintenance',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: twelfth
        }),
        ctrlPanComp: new DropdownQuestion({
            key: 'ctrlPanComp',
            label: 'Control Panel Components Checking',
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: twelfth
        }),
        fungsiAirPintu: new CategoryLabel({
            key: 'fungsiAirPintu',
            label: 'Fungsi Air Pintu',
            required: false,
            order: thirteenth
        }),
        pelinciranL: new TextboxQuestion({
            key: 'pelinciranL',
            label: 'Pelinciran (Lubrication)',
            value: '',
            required: false,
            order: thirteenth
        }),
        haus: new TextboxQuestion({
            key: 'haus',
            label: 'Haus (Wear)',
            value: '',
            required: false,
            order: thirteenth
        }),
        kP: new TextboxQuestion({
            key: 'kP',
            label: 'Kemudahan Pengangkutan (Ease of Travel)',
            value: '',
            required: false,
            order: thirteenth
        }),
        pDPGG: new TextboxQuestion({
            key: 'pDPGG',
            label: 'Pembukaan dan Penutupan Gear-Gear',
            value: '',
            required: false,
            order: thirteenth
        }),
        wireAngkut: new TextboxQuestion({
            key: 'wireAngkut',
            label: 'Wire Angkut (Lifting Rope)',
            value: '',
            required: false,
            order: thirteenth
        }),
        cadanganRPLText: new TextboxQuestion({
            key: 'cadanganRPLText',
            label: 'Cadangan (Rail Pintu dan Lekatnya)',
            value: '',
            required: false,
            order: thirteenth
        }),
        summary: new CategoryLabel({
            key: 'summary',
            label: 'SUMMARY',
            required: false,
            order: thirteenth
        }),
        actionTakenCB: new CheckBoxQuestion({
            key: 'actionTakenCB',
            label: 'Action Taken',
            checkboxes: [
                { key: 'AT_Maintenance', label: 'Maintenance', value: false },
                { key: 'AT_Visit', label: 'Visit', value: false },
                { key: 'AT_Inspection', label: 'Inspection', value: false },
                { key: 'AT_Commisioning', label: 'Commisioning', value: false }
            ],
            order: thirteenth
        }),
        actionTakenRTX: new RTXQuestion({
            key: 'actionTakenRTX',
            value: {
                ops: [
                    { insert: '\n' },
                    { insert: '\n' }
                ]
            },
            required: false,
            order: thirteenth
        }),
        actionNeedCB: new CheckBoxQuestion({
            key: 'actionNeedCB',
            label: 'Action Needed',
            checkboxes: [
                { key: 'AN_Maintenance', label: 'Maintenance', value: false },
                { key: 'AN_Visit', label: 'Visit', value: false },
                { key: 'AN_Inspection', label: 'Inspection', value: false },
                { key: 'AN_Commisioning', label: 'Commisioning', value: false },
                { key: 'AN_No Action', label: 'No Action', value: false }
            ],
            order: thirteenth
        }),
        actionNeedRTX: new RTXQuestion({
            key: 'actionNeedRTX',
            value: {
                ops: [
                    { insert: '\n' },
                    { insert: '\n' }
                ]
            },
            required: false,
            order: thirteenth
        }),
        complete: new DropdownQuestion({
            key: 'complete',
            label: 'State if you have completed the protocol',
            value: 'C',
            required: true,
            options: [
                { key: 'c', value: 'C' },
                { key: 'NC', value: 'NC' },
                { key: 'NA', value: 'NA' },
            ],
            order: thirteenth
        }),
        testedBy: new TextboxQuestion({
            key: 'testedBy',
            label: 'Tested by',
            value: '',
            required: true,
            order: thirteenth
        }),
        witnessedBy: new TextboxQuestion({
            key: 'witnessedBy',
            label: 'Witnessed by',
            value: '',
            required: true,
            order: thirteenth
        }),
        reviewBy: new TextboxQuestion({
            key: 'reviewBy',
            label: 'Reviewed by',
            value: '',
            required: false,
            order: thirteenth
        }),
        approveBy: new TextboxQuestion({
            key: 'approveBy',
            label: 'Approved by',
            value: '',
            required: false,
            order: thirteenth
        })
    };

    form.create(batch).
        then(function (doc) {
        }).
        catch();
});
