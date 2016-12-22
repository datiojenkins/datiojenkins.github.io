var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30364",
        "ok": "30361",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "60003"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "42236",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2966",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "1910",
        "ok": "1824",
        "ko": "1"
    },
    "percentiles1": {
        "total": "2701",
        "ok": "2701",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "3670",
        "ok": "3669",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "5784",
        "ok": "5780",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "9240",
        "ok": "9222",
        "ko": "60005"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1470,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1612,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27279,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "91.99",
        "ok": "91.981",
        "ko": "0.009"
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
        "total": "30364",
        "ok": "30361",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "60003"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "42236",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2966",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "1910",
        "ok": "1824",
        "ko": "1"
    },
    "percentiles1": {
        "total": "2701",
        "ok": "2701",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "3670",
        "ok": "3669",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "5784",
        "ok": "5780",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "9240",
        "ok": "9222",
        "ko": "60005"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1470,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1612,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27279,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "91.99",
        "ok": "91.981",
        "ko": "0.009"
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
