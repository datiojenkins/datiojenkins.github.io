var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20940",
        "ok": "12761",
        "ko": "8179"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "54",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "2103",
        "ok": "1804",
        "ko": "2103"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "103",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "95",
        "ko": "69"
    },
    "percentiles1": {
        "total": "79",
        "ok": "88",
        "ko": "52"
    },
    "percentiles2": {
        "total": "92",
        "ok": "103",
        "ko": "56"
    },
    "percentiles3": {
        "total": "135",
        "ok": "149",
        "ko": "66"
    },
    "percentiles4": {
        "total": "250",
        "ok": "314",
        "ko": "105"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12710,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 30,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 8179,
        "percentage": 39
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "332.73",
        "ok": "202.768",
        "ko": "129.962"
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
        "total": "20940",
        "ok": "12761",
        "ko": "8179"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "54",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "2103",
        "ok": "1804",
        "ko": "2103"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "103",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "95",
        "ko": "69"
    },
    "percentiles1": {
        "total": "79",
        "ok": "88",
        "ko": "52"
    },
    "percentiles2": {
        "total": "92",
        "ok": "103",
        "ko": "55"
    },
    "percentiles3": {
        "total": "135",
        "ok": "149",
        "ko": "66"
    },
    "percentiles4": {
        "total": "251",
        "ok": "314",
        "ko": "105"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12710,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 30,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 8179,
        "percentage": 39
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "332.73",
        "ok": "202.768",
        "ko": "129.962"
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
