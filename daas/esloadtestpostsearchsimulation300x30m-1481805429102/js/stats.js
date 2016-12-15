var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "210683",
        "ok": "86858",
        "ko": "123825"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "67",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "52681",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "427",
        "ok": "694",
        "ko": "240"
    },
    "standardDeviation": {
        "total": "1209",
        "ok": "1442",
        "ko": "971"
    },
    "percentiles1": {
        "total": "113",
        "ok": "388",
        "ko": "98"
    },
    "percentiles2": {
        "total": "386",
        "ok": "408",
        "ko": "104"
    },
    "percentiles3": {
        "total": "1394",
        "ok": "1594",
        "ko": "1079"
    },
    "percentiles4": {
        "total": "3504",
        "ok": "7362",
        "ko": "3106"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 73594,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1063,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12201,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 123825,
        "percentage": 59
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "638.54",
        "ok": "263.25",
        "ko": "375.29"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "210683",
        "ok": "86858",
        "ko": "123825"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "67",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "52681",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "427",
        "ok": "694",
        "ko": "240"
    },
    "standardDeviation": {
        "total": "1209",
        "ok": "1442",
        "ko": "971"
    },
    "percentiles1": {
        "total": "113",
        "ok": "388",
        "ko": "98"
    },
    "percentiles2": {
        "total": "386",
        "ok": "408",
        "ko": "104"
    },
    "percentiles3": {
        "total": "1393",
        "ok": "1593",
        "ko": "1079"
    },
    "percentiles4": {
        "total": "3505",
        "ok": "7362",
        "ko": "3106"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 73594,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1063,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12201,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 123825,
        "percentage": 59
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "638.54",
        "ok": "263.25",
        "ko": "375.29"
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
