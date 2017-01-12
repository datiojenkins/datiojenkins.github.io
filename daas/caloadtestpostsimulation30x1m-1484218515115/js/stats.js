var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "22328",
        "ok": "22327",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "26497"
    },
    "maxResponseTime": {
        "total": "26511",
        "ok": "26511",
        "ko": "26497"
    },
    "meanResponseTime": {
        "total": "161",
        "ok": "159",
        "ko": "26497"
    },
    "standardDeviation": {
        "total": "1601",
        "ok": "1591",
        "ko": "0"
    },
    "percentiles1": {
        "total": "57",
        "ok": "57",
        "ko": "26497"
    },
    "percentiles2": {
        "total": "64",
        "ok": "64",
        "ko": "26497"
    },
    "percentiles3": {
        "total": "73",
        "ok": "73",
        "ko": "26497"
    },
    "percentiles4": {
        "total": "110",
        "ok": "110",
        "ko": "26497"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 22237,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 89,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "181.617",
        "ok": "181.609",
        "ko": "0.008"
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
        "total": "22328",
        "ok": "22327",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "26497"
    },
    "maxResponseTime": {
        "total": "26511",
        "ok": "26511",
        "ko": "26497"
    },
    "meanResponseTime": {
        "total": "161",
        "ok": "159",
        "ko": "26497"
    },
    "standardDeviation": {
        "total": "1601",
        "ok": "1591",
        "ko": "0"
    },
    "percentiles1": {
        "total": "57",
        "ok": "57",
        "ko": "26497"
    },
    "percentiles2": {
        "total": "64",
        "ok": "64",
        "ko": "26497"
    },
    "percentiles3": {
        "total": "73",
        "ok": "73",
        "ko": "26497"
    },
    "percentiles4": {
        "total": "110",
        "ok": "110",
        "ko": "26497"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 22237,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 89,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "181.617",
        "ok": "181.609",
        "ko": "0.008"
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
