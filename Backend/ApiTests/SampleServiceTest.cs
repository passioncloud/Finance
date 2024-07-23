using Api.Services;

namespace ApiTests;


public class SampleServiceTest
{

    [Fact]
    public void SampleService_Returns_Hello_There()
    {
        // Given
        SampleService sampleService = new();
        // When
        string result = sampleService.HelloThere();
        // Then
        Console.WriteLine(result);
        Assert.Equal("Hello There", result);
    }
}