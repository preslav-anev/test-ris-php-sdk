<?php

class MaskEncodingTest extends PHPUnit_Framework_TestCase {

  const MERCHANT_ID  = 999666;
  const RIS_ENDPOINT = "https://risk.test.kount.net";

  private function getInquiry($cardNumber) {
    $inquiry = (new UtilityHelperTest())->createMaskedInquiry($cardNumber, self::RIS_ENDPOINT, self::MERCHANT_ID);

    return $inquiry;
  }

  public function testRisQUsingPaymentEncodingMaskValid() {
    $inquiry = $this->getInquiry('370070538959797');
    $response = $inquiry->getResponse();

    $this->assertEquals('AMEX', $response->getBrand());
  }

  public function testRisQUsingPaymentEncodingMaskError() {
    $inquiry = $this->getInquiry('370070538959797');
    $inquiry->setParm('PTOK', '370070538959797');
    $response = $inquiry->getResponse();

    $this->assertEquals('E', $response->getMode());
    $this->assertEquals(340, $response->getErrorCode());
    $this->assertEquals('340 BAD_MASK Cause: [value [370070538959797] did not match regex /^\d{6}X{5,9}\d{1,4}$/], Field: [PTOK], Value: [370070538959797]', $response->getErrors()[0]);
    $this->assertEquals(1, $response->getErrorCount());
    $this->assertEquals(0, $response->getWarningCount());
  }
}