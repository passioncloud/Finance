using Api.Models;

namespace Api.Services;

public class NoSeriesService(ApiDbContext apiDbContext)
{
    public string NextNo(Guid NoSeriesId)
    {
        NoSeries noSeries = apiDbContext.NoSeries.Find(NoSeriesId);
        string lastUsedNo = noSeries.LastUsedNo;
        string leadingText = ExtractTextAtStart(lastUsedNo);
        int numberAtEnd = ExtractNumberAtEnd(lastUsedNo);
        int nextNumber = numberAtEnd + 1;
        lastUsedNo = leadingText + nextNumber;
        noSeries.LastUsedNo = lastUsedNo;
        return lastUsedNo;
    }


    /// <summary>
    /// Extract number at end of string in C#
    /// see: https://stackoverflow.com/q/13169393/10030693
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    private static int ExtractNumberAtEnd(string input)
    {
        string intString = string.Concat(input.ToArray().Reverse().TakeWhile(char.IsNumber).Reverse());
        if(intString == "") return 0;
        return int.Parse(intString);
    }

    /// <summary>
    /// Extract number at end of string in C#
    /// see: https://stackoverflow.com/q/13169393/10030693
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    private static string ExtractTextAtStart(string input)
    {
        // take all leading characters that are not number or are zero
        return string.Concat(input.ToArray().TakeWhile(c =>
        {
            return !char.IsNumber(c) || c == '0';
        }));
    }
}