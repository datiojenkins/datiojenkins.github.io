var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30370",
        "ok": "30368",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "60002"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "53950",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2969",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "1866",
        "ok": "1808",
        "ko": "1"
    },
    "percentiles1": {
        "total": "2735",
        "ok": "2735",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "3682",
        "ok": "3682",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "5749",
        "ok": "5747",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "8789",
        "ok": "8781",
        "ko": "60003"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 185,
        "percentage": 1
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1502,
        "percentage": 5
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 28681,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "91.91",
        "ok": "91.904",
        "ko": "0.006"
    }
},
contents: {
"req_esloadtestgetdo-bd4be": {
        type: "REQUEST",
        name: "EsLoadTestGetDocumentSimulation300x30m",
path: "EsLoadTestGetDocumentSimulation300x30m",
pathFormatted: "req_esloadtestgetdo-bd4be",
stats: {
    "name": "EsLoadTestGetDocumentSimulation300x30m",
    "numberOfRequests": {
        "total": "30370",
        "ok": "30368",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "60002"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "53950",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2969",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "1866",
        "ok": "1808",
        "ko": "1"
    },
    "percentiles1": {
        "total": "2735",
        "ok": "2735",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "3682",
        "ok": "3682",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "5749",
        "ok": "5747",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "8789",
        "ok": "8781",
        "ko": "60003"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 185,
        "percentage": 1
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1502,
        "percentage": 5
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 28681,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "91.91",
        "ok": "91.904",
        "ko": "0.006"
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
