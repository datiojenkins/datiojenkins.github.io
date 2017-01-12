var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1289580",
        "ok": "1262054",
        "ko": "27526"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "1618"
    },
    "maxResponseTime": {
        "total": "105509",
        "ok": "93015",
        "ko": "105509"
    },
    "meanResponseTime": {
        "total": "2844",
        "ok": "1601",
        "ko": "59838"
    },
    "standardDeviation": {
        "total": "9549",
        "ok": "3060",
        "ko": "1957"
    },
    "percentiles1": {
        "total": "739",
        "ok": "724",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "1492",
        "ok": "1354",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "6736",
        "ok": "5351",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "13850",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 141241,
        "percentage": 11
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 556841,
        "percentage": 43
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 563972,
        "percentage": 44
    },
    "group4": {
        "name": "failed",
        "count": 27526,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1073.961",
        "ok": "1051.037",
        "ko": "22.924"
    }
},
contents: {
"req_castresstestpos-57704": {
        type: "REQUEST",
        name: "CaStressTestPostSimulation",
path: "CaStressTestPostSimulation",
pathFormatted: "req_castresstestpos-57704",
stats: {
    "name": "CaStressTestPostSimulation",
    "numberOfRequests": {
        "total": "1289580",
        "ok": "1262054",
        "ko": "27526"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "1618"
    },
    "maxResponseTime": {
        "total": "105509",
        "ok": "93015",
        "ko": "105509"
    },
    "meanResponseTime": {
        "total": "2844",
        "ok": "1601",
        "ko": "59838"
    },
    "standardDeviation": {
        "total": "9549",
        "ok": "3060",
        "ko": "1957"
    },
    "percentiles1": {
        "total": "738",
        "ok": "723",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "1492",
        "ok": "1355",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "6737",
        "ok": "5351",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "13851",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 141241,
        "percentage": 11
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 556841,
        "percentage": 43
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 563972,
        "percentage": 44
    },
    "group4": {
        "name": "failed",
        "count": 27526,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1073.961",
        "ok": "1051.037",
        "ko": "22.924"
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
