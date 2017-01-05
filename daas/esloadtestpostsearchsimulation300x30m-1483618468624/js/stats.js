var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1047222",
        "ok": "859160",
        "ko": "188062"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "49",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "60067",
        "ok": "32310",
        "ko": "60067"
    },
    "meanResponseTime": {
        "total": "515",
        "ok": "481",
        "ko": "669"
    },
    "standardDeviation": {
        "total": "1253",
        "ok": "985",
        "ko": "2068"
    },
    "percentiles1": {
        "total": "254",
        "ok": "244",
        "ko": "316"
    },
    "percentiles2": {
        "total": "311",
        "ok": "282",
        "ko": "364"
    },
    "percentiles3": {
        "total": "1348",
        "ok": "1302",
        "ko": "1518"
    },
    "percentiles4": {
        "total": "3426",
        "ok": "3345",
        "ko": "4234"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 38644,
        "percentage": 4
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 702215,
        "percentage": 67
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 118301,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 188062,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "563.714",
        "ok": "462.481",
        "ko": "101.233"
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
        "total": "1047222",
        "ok": "859160",
        "ko": "188062"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "49",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "60067",
        "ok": "32310",
        "ko": "60067"
    },
    "meanResponseTime": {
        "total": "515",
        "ok": "481",
        "ko": "669"
    },
    "standardDeviation": {
        "total": "1253",
        "ok": "985",
        "ko": "2068"
    },
    "percentiles1": {
        "total": "254",
        "ok": "244",
        "ko": "316"
    },
    "percentiles2": {
        "total": "311",
        "ok": "282",
        "ko": "364"
    },
    "percentiles3": {
        "total": "1348",
        "ok": "1302",
        "ko": "1518"
    },
    "percentiles4": {
        "total": "3426",
        "ok": "3345",
        "ko": "4234"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 38644,
        "percentage": 4
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 702215,
        "percentage": 67
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 118301,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 188062,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "563.714",
        "ok": "462.481",
        "ko": "101.233"
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
