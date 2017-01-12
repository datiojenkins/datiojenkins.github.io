var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "17790",
        "ok": "17787",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "25104"
    },
    "maxResponseTime": {
        "total": "25179",
        "ok": "25179",
        "ko": "25111"
    },
    "meanResponseTime": {
        "total": "227",
        "ok": "223",
        "ko": "25108"
    },
    "standardDeviation": {
        "total": "2024",
        "ok": "1998",
        "ko": "2"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "25109"
    },
    "percentiles2": {
        "total": "65",
        "ok": "65",
        "ko": "25110"
    },
    "percentiles3": {
        "total": "79",
        "ok": "79",
        "ko": "25110"
    },
    "percentiles4": {
        "total": "159",
        "ok": "159",
        "ko": "25110"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 17664,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 6,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 117,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "130.135",
        "ok": "130.113",
        "ko": "0.022"
    }
},
contents: {
"req_caloadtestposts-4ee46": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m",
path: "CaLoadTestPostSimulation30x1m",
pathFormatted: "req_caloadtestposts-4ee46",
stats: {
    "name": "CaLoadTestPostSimulation30x1m",
    "numberOfRequests": {
        "total": "17790",
        "ok": "17787",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "25104"
    },
    "maxResponseTime": {
        "total": "25179",
        "ok": "25179",
        "ko": "25111"
    },
    "meanResponseTime": {
        "total": "227",
        "ok": "223",
        "ko": "25108"
    },
    "standardDeviation": {
        "total": "2024",
        "ok": "1998",
        "ko": "2"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "25109"
    },
    "percentiles2": {
        "total": "65",
        "ok": "65",
        "ko": "25110"
    },
    "percentiles3": {
        "total": "79",
        "ok": "79",
        "ko": "25110"
    },
    "percentiles4": {
        "total": "159",
        "ok": "159",
        "ko": "25110"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 17664,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 6,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 117,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "130.135",
        "ok": "130.113",
        "ko": "0.022"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
