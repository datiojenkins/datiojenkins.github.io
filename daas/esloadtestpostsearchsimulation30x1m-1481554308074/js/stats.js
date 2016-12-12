var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16761",
        "ok": "16336",
        "ko": "425"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "46",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "1158",
        "ok": "1158",
        "ko": "161"
    },
    "meanResponseTime": {
        "total": "107",
        "ok": "108",
        "ko": "63"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "76",
        "ko": "28"
    },
    "percentiles1": {
        "total": "90",
        "ok": "91",
        "ko": "49"
    },
    "percentiles2": {
        "total": "116",
        "ok": "117",
        "ko": "72"
    },
    "percentiles3": {
        "total": "179",
        "ok": "181",
        "ko": "132"
    },
    "percentiles4": {
        "total": "340",
        "ok": "345",
        "ko": "150"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 15691,
        "percentage": 94
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 546,
        "percentage": 3
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 99,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 425,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "266.373",
        "ok": "259.619",
        "ko": "6.754"
    }
},
contents: {
"req_esloadtestposts-79439": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation30x1m",
path: "EsLoadTestPostSearchSimulation30x1m",
pathFormatted: "req_esloadtestposts-79439",
stats: {
    "name": "EsLoadTestPostSearchSimulation30x1m",
    "numberOfRequests": {
        "total": "16761",
        "ok": "16336",
        "ko": "425"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "46",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "1158",
        "ok": "1158",
        "ko": "161"
    },
    "meanResponseTime": {
        "total": "107",
        "ok": "108",
        "ko": "63"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "76",
        "ko": "28"
    },
    "percentiles1": {
        "total": "90",
        "ok": "91",
        "ko": "49"
    },
    "percentiles2": {
        "total": "116",
        "ok": "117",
        "ko": "72"
    },
    "percentiles3": {
        "total": "179",
        "ok": "181",
        "ko": "132"
    },
    "percentiles4": {
        "total": "340",
        "ok": "345",
        "ko": "150"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 15691,
        "percentage": 94
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 546,
        "percentage": 3
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 99,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 425,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "266.373",
        "ok": "259.619",
        "ko": "6.754"
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
