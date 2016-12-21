var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1080356",
        "ok": "860258",
        "ko": "220098"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "46",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60068",
        "ok": "45004",
        "ko": "60068"
    },
    "meanResponseTime": {
        "total": "499",
        "ok": "467",
        "ko": "628"
    },
    "standardDeviation": {
        "total": "1191",
        "ok": "910",
        "ko": "1924"
    },
    "percentiles1": {
        "total": "251",
        "ok": "235",
        "ko": "299"
    },
    "percentiles2": {
        "total": "312",
        "ok": "291",
        "ko": "400"
    },
    "percentiles3": {
        "total": "1339",
        "ok": "1302",
        "ko": "1486"
    },
    "percentiles4": {
        "total": "3391",
        "ok": "3320",
        "ko": "3541"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 116129,
        "percentage": 11
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 626256,
        "percentage": 58
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 117873,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 220098,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "583.456",
        "ok": "464.59",
        "ko": "118.866"
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
        "total": "1080356",
        "ok": "860258",
        "ko": "220098"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "46",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60068",
        "ok": "45004",
        "ko": "60068"
    },
    "meanResponseTime": {
        "total": "499",
        "ok": "467",
        "ko": "628"
    },
    "standardDeviation": {
        "total": "1191",
        "ok": "910",
        "ko": "1924"
    },
    "percentiles1": {
        "total": "251",
        "ok": "235",
        "ko": "299"
    },
    "percentiles2": {
        "total": "312",
        "ok": "291",
        "ko": "400"
    },
    "percentiles3": {
        "total": "1339",
        "ok": "1302",
        "ko": "1486"
    },
    "percentiles4": {
        "total": "3391",
        "ok": "3320",
        "ko": "3541"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 116129,
        "percentage": 11
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 626256,
        "percentage": 58
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 117873,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 220098,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "583.456",
        "ok": "464.59",
        "ko": "118.866"
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
