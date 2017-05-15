<?php

class BasicConnectivityCredentialsTest extends PHPUnit_Framework_TestCase
{
  const MERCHANT_ID = 999667;
  const EMAIL = 'predictive@kount.com';
  const RIS_ENDPOINT = "https://risk.test.kount.net";

  private function getInquiryCustomCreds() {
    $inquiry = (new UtilityHelperTest())->createInquiry(self::MERCHANT_ID, self::RIS_ENDPOINT);

    //$inquiry->setMerchantId(self::MERCHANT_ID);
    $inquiry->setEmail(self::EMAIL);

    return $inquiry;
  }

  public function testExpectedScore() {
    $inquiry = $this->getInquiryCustomCreds();

    $inquiry->setParm('UDF[~K!_SCOR]', 42);
    $response = $inquiry->getResponse();
    $this->assertEquals(42, $response->getScore());
  }

  public function testExpectedDecision() {
    $inquiry = $this->getInquiryCustomCreds();

    $inquiry->setParm('UDF[~K!_AUTO]', 'R');
    $response = $inquiry->getResponse();

    $this->assertEquals('R', $response->getAuto());
  }
}